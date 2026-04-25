import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useGameLoop, FallingItem } from '../../../hooks/useGameLoop';
import { trackEvent } from '../../../utils/analytics';

const MOVE_AMOUNT  = 2.5; // % per input tick
const INPUT_TICK   = 16;  // ms
const HS_KEY       = 'coffeeGame_highScore';

function readHighScore(): number {
  try { return parseInt(localStorage.getItem(HS_KEY) ?? '0', 10) || 0; }
  catch { return 0; }
}
function writeHighScore(v: number) {
  try { localStorage.setItem(HS_KEY, String(v)); } catch { /* noop */ }
}

// ─── Oso cup ──────────────────────────────────────────────────────────────────
// viewBox is 56 wide so the handle (max x≈50) and ears don't clip.

function CoffeeCup() {
  return (
    <svg
      width="56" height="62" viewBox="0 0 56 62"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-label="Oso coffee cup"
    >
      {/* Steam */}
      <path d="M16 13 C13 7 16 3 13 0"  stroke="#F07A20" strokeWidth="2"   strokeLinecap="round" opacity="0.85" />
      <path d="M24 15 C21 9 24 5 21 2"  stroke="#F07A20" strokeWidth="2.2" strokeLinecap="round" opacity="0.95" />
      <path d="M32 13 C29 7 32 3 29 0"  stroke="#F07A20" strokeWidth="2"   strokeLinecap="round" opacity="0.75" />

      {/* Bear ears (left & right of rim) */}
      <circle cx="10" cy="19" r="5.5" fill="#063C6B" />
      <circle cx="38" cy="19" r="5.5" fill="#063C6B" />
      <circle cx="10" cy="19" r="2.8" fill="#F07A20" opacity="0.5" />
      <circle cx="38" cy="19" r="2.8" fill="#F07A20" opacity="0.5" />

      {/* Rim */}
      <rect x="5" y="17" width="38" height="6" rx="3" fill="#063C6B" />

      {/* Cup body — slight trapezoid */}
      <path d="M7 23 L10 51 L38 51 L41 23 Z" fill="#063C6B" />

      {/* Handle — fits inside viewBox (max x=51) */}
      <path
        d="M41 28 C51 28 51 45 41 45"
        stroke="#063C6B" strokeWidth="4.5"
        fill="none" strokeLinecap="round"
      />

      {/* Bear face on cup */}
      <circle cx="20" cy="35" r="2.2" fill="white" opacity="0.65" />
      <circle cx="28" cy="35" r="2.2" fill="white" opacity="0.65" />
      <ellipse cx="24" cy="40" rx="3.5" ry="2.2" fill="white" opacity="0.4" />

      {/* Shine */}
      <path d="M10 27 L12 47" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.18" />

      {/* Saucer */}
      <path d="M4 54 Q24 60 48 54" stroke="#063C6B" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─── Falling item icons ────────────────────────────────────────────────────────

function BeanIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" aria-hidden>
      <ellipse cx="11" cy="14" rx="10" ry="13" fill={color} />
      <path d="M11 3 Q17 14 11 25" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" fill="none" />
    </svg>
  );
}

function CommitIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="6" fill={color} />
      <circle cx="12" cy="12" r="4" fill="white" opacity="0.65" />
      <line x1="12" y1="4"  x2="12" y2="8"  stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="16" x2="12" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4"  y1="12" x2="8"  y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Heart({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden>
      <path
        d="M9 14 C9 14 1 9 1 4.5 C1 2.5 2.7 1 4.75 1 C6.2 1 7.5 1.85 9 3.2 C10.5 1.85 11.8 1 13.25 1 C15.3 1 17 2.5 17 4.5 C17 9 9 14 9 14Z"
        fill={filled ? '#F07A20' : 'none'}
        stroke="#F07A20" strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── Wave background (parallax) ───────────────────────────────────────────────

function WaveBackground({ playerPosition }: { playerPosition: number }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const offset = (playerPosition - 50) * 0.18;
    ref.current.style.transform = `translateX(${offset}px)`;
  }, [playerPosition]);

  return (
    <svg
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-full w-full"
      viewBox="0 0 1440 520"
      fill="none"
      preserveAspectRatio="none"
      style={{ opacity: 0.09, willChange: 'transform', transition: 'transform 0.08s linear' }}
    >
      <path className="wave-1" d="M0 196C119 168 166 121 279 121C409 121 468 240 607 240C732 240 806 149 932 149C1060 149 1111 247 1228 247C1325 247 1373 204 1440 176" stroke="#063C6B" strokeWidth="1.5" />
      <path className="wave-2" d="M0 266C97 266 161 212 273 212C415 212 460 332 607 332C739 332 794 251 929 251C1078 251 1131 356 1243 356C1324 356 1380 317 1440 285" stroke="#6FA3C2" strokeWidth="1.2" />
      <path className="wave-3" d="M0 352C137 319 188 286 301 286C426 286 493 395 615 395C751 395 812 317 942 317C1068 317 1113 407 1229 407C1324 407 1377 372 1440 339" stroke="#063C6B" strokeWidth="1" />
    </svg>
  );
}

// ─── Falling item element (memoised — only re-mounts when id changes) ──────────

const FallingItemEl = memo(function FallingItemEl({ item }: { item: FallingItem }) {
  return (
    <div
      className="animate-item-drop pointer-events-none select-none"
      style={{
        position: 'absolute',
        left: `${item.x}%`,
        top: `${item.y}%`,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        zIndex: 12,
      }}
    >
      {item.kind === 'bean' ? <BeanIcon color={item.color} /> : <CommitIcon color={item.color} />}
      <span style={{
        fontSize: 9, fontWeight: 600, color: item.color,
        whiteSpace: 'nowrap', maxWidth: 72,
        overflow: 'hidden', textOverflow: 'ellipsis',
        letterSpacing: '0.04em', lineHeight: 1,
        textShadow: '0 1px 2px rgba(242,241,240,0.92)',
      }}>
        {item.label}
      </span>
    </div>
  );
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

const paperNoiseUri =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E\")";

const btn = (bg: string, fg: string): React.CSSProperties => ({
  background: bg, color: fg, border: '1px solid rgba(207,211,210,0.18)', borderRadius: 8,
  padding: '12px 32px', fontSize: 14, fontWeight: 700,
  fontFamily: "'DM Sans', sans-serif",
  cursor: 'pointer', letterSpacing: 0,
});

function scoreFlavour(n: number) {
  if (n === 0)  return 'Cold brew.';
  if (n < 10)   return 'Single origin.';
  if (n < 25)   return 'Nice roast!';
  return 'Master roaster!';
}

// ─── Main component ────────────────────────────────────────────────────────────

type Phase = 'idle' | 'playing' | 'gameover';

export default function CoffeeGame() {
  const {
    score, lives, isGameOver,
    playerPosition, fallingItems, caughtLabel,
    movePlayer, startGame, resetGame,
  } = useGameLoop();

  const [phase,     setPhase]     = useState<Phase>('idle');
  const [highScore, setHighScore] = useState<number>(readHighScore);
  const [isNewBest, setIsNewBest] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Game-over transition ──
  useEffect(() => {
    if (isGameOver && phase === 'playing') {
      const newBest = score > highScore;
      if (newBest) writeHighScore(score);
      queueMicrotask(() => {
        if (newBest) setHighScore(score);
        setIsNewBest(newBest);
        setPhase('gameover');
      });
      trackEvent('game_score_submitted', { score, high_score: newBest ? score : highScore });
    }
  }, [isGameOver, phase, score, highScore]);

  // ── Keyboard input ──
  const playerPosRef = useRef(playerPosition);
  useEffect(() => { playerPosRef.current = playerPosition; }, [playerPosition]);
  const keysRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (phase !== 'playing') return;
    const pressedKeys = keysRef.current;
    const onDown = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd', 'A', 'D'].includes(e.key)) {
        e.preventDefault();
        pressedKeys.add(e.key);
      }
    };
    const onUp = (e: KeyboardEvent) => pressedKeys.delete(e.key);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    const id = setInterval(() => {
      if (pressedKeys.has('ArrowLeft') || pressedKeys.has('a') || pressedKeys.has('A'))
        movePlayer(playerPosRef.current - MOVE_AMOUNT);
      if (pressedKeys.has('ArrowRight') || pressedKeys.has('d') || pressedKeys.has('D'))
        movePlayer(playerPosRef.current + MOVE_AMOUNT);
    }, INPUT_TICK);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
      clearInterval(id);
      pressedKeys.clear();
    };
  }, [phase, movePlayer]);

  // ── Touch input ──
  const touchSideRef = useRef<'left' | 'right' | null>(null);
  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      if (touchSideRef.current === 'left')  movePlayer(playerPosRef.current - MOVE_AMOUNT);
      if (touchSideRef.current === 'right') movePlayer(playerPosRef.current + MOVE_AMOUNT);
    }, INPUT_TICK);
    return () => clearInterval(id);
  }, [phase, movePlayer]);

  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (phase !== 'playing') return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    touchSideRef.current = e.changedTouches[0].clientX < rect.left + rect.width / 2 ? 'left' : 'right';
  }, [phase]);
  const onTouchEnd = useCallback(() => { touchSideRef.current = null; }, []);

  // ── Phase actions ──
  const handleStart = useCallback(() => {
    setPhase('playing');
    setIsNewBest(false);
    startGame();
    trackEvent('game_started');
  }, [startGame]);

  const handlePlayAgain = useCallback(() => {
    resetGame();
    setPhase('idle');
  }, [resetGame]);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="animate-fade-up">
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none"
        style={{
          height: 520,
          borderRadius: 8,
          border: '1px solid var(--border-subtle)',
          background: 'rgba(17, 77, 138, 0.72)',
          backgroundImage: paperNoiseUri,
          boxShadow: 'var(--shadow-card)',
          fontFamily: "'DM Sans', sans-serif",
          touchAction: 'none',
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        {/* Parallax wave lines */}
        <WaveBackground playerPosition={playerPosition} />

        {/* End-of-table bonus zones */}
        <div className="absolute inset-y-0 left-0 pointer-events-none"  style={{ width: '10%', background: 'linear-gradient(to right, rgba(240,122,32,0.08), transparent)' }} />
        <div className="absolute inset-y-0 right-0 pointer-events-none" style={{ width: '10%', background: 'linear-gradient(to left, rgba(240,122,32,0.08), transparent)' }} />

        {/* HUD */}
        {phase !== 'idle' && (
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 pointer-events-none" style={{ zIndex: 20 }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)', letterSpacing: 0 }}>
              Score&nbsp;
              <span style={{ color: 'var(--accent)', fontWeight: 800 }}>{score}</span>
              {highScore > 0 && (
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', marginLeft: 8 }}>
                  best&nbsp;{highScore}
                </span>
              )}
            </span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => <Heart key={i} filled={i < lives} />)}
            </div>
          </div>
        )}

        {/* Legend */}
        {phase === 'playing' && (
          <div className="absolute bottom-3 left-3 flex gap-3 pointer-events-none" style={{ zIndex: 20 }}>
            <span style={{ fontSize: 10, color: '#F07A20', fontWeight: 600, opacity: 0.78, letterSpacing: '0.05em' }}>BEAN</span>
            <span style={{ fontSize: 10, color: '#6FA3C2', fontWeight: 600, opacity: 0.78, letterSpacing: '0.05em' }}>COMMIT</span>
            <span style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600, opacity: 0.62, letterSpacing: '0.05em' }}>2x edges</span>
          </div>
        )}

        {/* Falling items */}
        {phase === 'playing' && fallingItems.map((item) => (
          <FallingItemEl key={item.id} item={item} />
        ))}

        {/* Caught label — floats up then fades */}
        {phase === 'playing' && caughtLabel && (
          <div
            key={caughtLabel.label + score}
            className="animate-caught pointer-events-none"
            style={{
              position: 'absolute',
              left: `${playerPosition}%`,
              top: '72%',
              zIndex: 25,
              fontWeight: 700,
              fontSize: 13,
              color: caughtLabel.color,
              whiteSpace: 'nowrap',
              letterSpacing: 0,
              textShadow: '0 1px 4px rgba(6,60,107,0.98)',
            }}
          >
            {caughtLabel.label}
          </div>
        )}

        {/* Player — Oso cup */}
        {phase === 'playing' && (
          <div
            className="pointer-events-none"
            style={{
              position: 'absolute',
              left: `${playerPosition}%`,
              top: '80%',
              transform: 'translateX(-50%)',
              zIndex: 15,
            }}
          >
            <CoffeeCup />
          </div>
        )}

        {/* ── Start overlay ── */}
        {phase === 'idle' && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-0"
            style={{ background: 'rgba(6,60,107,0.88)', backdropFilter: 'blur(4px)', zIndex: 30 }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: 'var(--accent-sand)', marginBottom: 10 }}>
              Play mode
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--text-main)', letterSpacing: 0, lineHeight: 1.1, textAlign: 'center', marginBottom: 10 }}
            >
              The Specialty Sprint.
            </h2>
            <p style={{ fontSize: 13, color: 'var(--muted)', textAlign: 'center', maxWidth: 290, marginBottom: highScore > 0 ? 12 : 28, lineHeight: 1.6 }}>
              Beans, commits, and a steady hand.
            </p>

            {highScore > 0 && (
              <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em', marginBottom: 20 }}>
                Best: {highScore} pts
              </p>
            )}

            <button
              onClick={handleStart}
              style={btn('var(--primary)', '#fff')}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Start game
            </button>
          </div>
        )}

        {/* ── Game-over overlay ── */}
        {phase === 'gameover' && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: 'rgba(6,60,107,0.9)', backdropFilter: 'blur(4px)', zIndex: 30 }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(242,241,240,0.55)', marginBottom: 10 }}>
              Game over
            </p>

            {isNewBest && (
              <span style={{
                display: 'inline-block', background: 'var(--accent)', color: '#fff',
                fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
                padding: '3px 12px', borderRadius: 99, marginBottom: 10,
              }}>
                New best
              </span>
            )}

            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'var(--text-main)', letterSpacing: 0, lineHeight: 1, marginBottom: 8 }}
            >
              {scoreFlavour(score)}
            </h2>

            <p style={{ fontSize: 30, fontWeight: 800, color: 'var(--accent)', letterSpacing: 0, marginBottom: 6 }}>
              {score}&nbsp;
              <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(242,241,240,0.5)' }}>pts</span>
            </p>

            <p style={{ fontSize: 12, color: 'rgba(242,241,240,0.4)', marginBottom: 28 }}>
              {isNewBest ? 'New record saved!' : highScore > 0 ? `Best: ${highScore} pts` : ''}
            </p>

            <button
              onClick={handlePlayAgain}
              style={btn('var(--accent)', '#fff')}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
