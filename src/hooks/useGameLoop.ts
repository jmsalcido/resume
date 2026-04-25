import { useState, useEffect, useRef, useCallback } from 'react';
import developer from '../data/developer';
import resume from '../data/resume';

export type ItemKind = 'bean' | 'commit';

export interface FallingItem {
  id: number;
  x: number;
  y: number;
  kind: ItemKind;
  label: string;
  color: string;
}

export interface CaughtLabel {
  label: string;
  color: string;
}

interface UseGameLoopReturn {
  score: number;
  lives: number;
  isGameOver: boolean;
  playerPosition: number;
  fallingItems: FallingItem[];
  caughtLabel: CaughtLabel | null;
  movePlayer: (position: number) => void;
  startGame: () => void;
  resetGame: () => void;
}

// % units, container is 0–100 on both axes
const CATCH_RADIUS_X  = 9;    // horizontal tolerance in %
const CATCH_BAND_TOP  = 88;   // items enter catch window here
const CATCH_BAND_BOT  = 96;   // items exit catch window here (miss if still alive)
const GRAVITY         = 0.038; // % per ms — ~40 units/sec regardless of fps
const SPAWN_MIN_MS    = 900;
const SPAWN_MAX_MS    = 2200;
const EOT_THRESHOLD   = 10;   // end-of-table bonus zone width %
const CAUGHT_LABEL_MS = 900;
const MAX_LIVES       = 3;
const DELTA_CAP_MS    = 50;   // ignore pauses longer than this (tab switch etc.)

const BEAN_COLOR   = '#F07A20';
const COMMIT_COLOR = '#6FA3C2';

const beanLabels   = developer.interests;
const commitLabels = resume.skills.map((s) => s.name);

let nextId = 0;

const isEndOfTable = (pos: number) =>
  pos < EOT_THRESHOLD || pos > 100 - EOT_THRESHOLD;

function randomItem(): Pick<FallingItem, 'kind' | 'label' | 'color'> {
  if (Math.random() < 0.5) {
    return {
      kind: 'bean',
      label: beanLabels[Math.floor(Math.random() * beanLabels.length)],
      color: BEAN_COLOR,
    };
  }
  return {
    kind: 'commit',
    label: commitLabels[Math.floor(Math.random() * commitLabels.length)],
    color: COMMIT_COLOR,
  };
}

export function useGameLoop(): UseGameLoopReturn {
  const [score,          setScore]         = useState(0);
  const [lives,          setLives]         = useState(MAX_LIVES);
  const [isGameOver,     setIsGameOver]    = useState(false);
  const [playerPosition, setPlayerPosition]= useState(50);
  const [fallingItems,   setFallingItems]  = useState<FallingItem[]>([]);
  const [caughtLabel,    setCaughtLabel]   = useState<CaughtLabel | null>(null);

  // Refs that the RAF callback can always read without stale-closure issues
  const playerPosRef    = useRef(50);
  const itemsRef        = useRef<FallingItem[]>([]);
  const runningRef      = useRef(false);
  const rafRef          = useRef<number | null>(null);
  const spawnTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const labelTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTsRef       = useRef<number | null>(null);
  const scheduleSpawnRef = useRef<() => void>(() => undefined);
  const tickRef = useRef<(timestamp: number) => void>(() => undefined);

  // Keep player pos ref in sync with state
  const movePlayer = useCallback((position: number) => {
    const clamped = Math.max(0, Math.min(100, position));
    playerPosRef.current = clamped;
    setPlayerPosition(clamped);
  }, []);

  const showCaughtLabel = useCallback((label: string, color: string) => {
    setCaughtLabel({ label, color });
    if (labelTimerRef.current !== null) clearTimeout(labelTimerRef.current);
    labelTimerRef.current = setTimeout(() => setCaughtLabel(null), CAUGHT_LABEL_MS);
  }, []);

  // ── Spawn ──────────────────────────────────────────────────────────────────
  const scheduleSpawn = useCallback(() => {
    const delay = SPAWN_MIN_MS + Math.random() * (SPAWN_MAX_MS - SPAWN_MIN_MS);
    spawnTimerRef.current = setTimeout(() => {
      if (!runningRef.current) return;
      const item: FallingItem = {
        id: nextId++,
        x: 5 + Math.random() * 90,
        y: -5, // start just above the visible area
        ...randomItem(),
      };
      itemsRef.current = [...itemsRef.current, item];
      setFallingItems(itemsRef.current);
      scheduleSpawnRef.current();
    }, delay);
  }, []);
  useEffect(() => {
    scheduleSpawnRef.current = scheduleSpawn;
  }, [scheduleSpawn]);

  // ── Game tick (RAF callback) ───────────────────────────────────────────────
  const tick = useCallback((timestamp: number) => {
    if (!runningRef.current) return;

    const delta = Math.min(
      lastTsRef.current !== null ? timestamp - lastTsRef.current : 16,
      DELTA_CAP_MS,
    );
    lastTsRef.current = timestamp;

    const pos      = playerPosRef.current;
    const dy       = GRAVITY * delta;
    const prev     = itemsRef.current;
    const survived: FallingItem[] = [];
    const caught:   FallingItem[] = [];
    let   missed = 0;

    for (const item of prev) {
      const updated: FallingItem = { ...item, y: item.y + dy };

      if (updated.y >= CATCH_BAND_TOP) {
        // Item is in the catch band
        const inBand = updated.y <= CATCH_BAND_BOT;
        const aligned = Math.abs(updated.x - pos) <= CATCH_RADIUS_X;

        if (inBand && aligned) {
          caught.push(updated);
          continue;
        }
        if (updated.y > CATCH_BAND_BOT) {
          // Exited the bottom of the catch band without being caught — miss
          missed++;
          continue;
        }
      }

      survived.push(updated);
    }

    // Commit new item list synchronously via ref, then trigger render
    itemsRef.current = survived;
    setFallingItems(survived);

    if (caught.length > 0) {
      const mult = isEndOfTable(pos) ? 2 : 1;
      setScore((s) => s + mult * caught.length);
      const last = caught[caught.length - 1];
      showCaughtLabel(last.label, last.color);
    }

    if (missed > 0) {
      setLives((l) => {
        const next = l - missed;
        if (next <= 0) {
          runningRef.current = false;
          setIsGameOver(true);
          return 0;
        }
        return next;
      });
    }

    rafRef.current = requestAnimationFrame((nextTimestamp) => tickRef.current(nextTimestamp));
  }, [showCaughtLabel]);
  useEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  // ── Loop control ───────────────────────────────────────────────────────────
  const stopLoop = useCallback(() => {
    runningRef.current = false;
    lastTsRef.current  = null;
    if (rafRef.current !== null)     { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    if (spawnTimerRef.current !== null) { clearTimeout(spawnTimerRef.current); spawnTimerRef.current = null; }
    if (labelTimerRef.current !== null) { clearTimeout(labelTimerRef.current); labelTimerRef.current = null; }
  }, []);

  const startGame = useCallback(() => {
    lastTsRef.current  = null;
    runningRef.current = true;
    rafRef.current = requestAnimationFrame((timestamp) => tickRef.current(timestamp));
    scheduleSpawn();
  }, [scheduleSpawn]);

  const resetGame = useCallback(() => {
    stopLoop();
    itemsRef.current = [];
    setFallingItems([]);
    setScore(0);
    setLives(MAX_LIVES);
    setIsGameOver(false);
    setPlayerPosition(50);
    playerPosRef.current = 50;
    setCaughtLabel(null);
  }, [stopLoop]);

  // Cleanup on unmount
  useEffect(() => () => stopLoop(), [stopLoop]);

  return {
    score, lives, isGameOver,
    playerPosition, fallingItems, caughtLabel,
    movePlayer, startGame, resetGame,
  };
}
