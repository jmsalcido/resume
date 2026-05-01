import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clipboard, Check, Share2 } from 'lucide-react';

const SPOTIFY_TO_APPLE_ENDPOINT = 'https://backend.otfusion.org/webhook/spotify-to-apple';

type AppleMusicMatch = {
  name: string;
  artist: string;
  album: string;
  duration_ms: number;
  url: string;
  artwork?: string;
  confidence?: number;
};

type SpotifyToAppleResponse = {
  found: boolean;
  apple_music?: AppleMusicMatch;
};

function SpotifyToApplePage() {
  const [url, setUrl] = useState(getInitialSharedSpotifyUrl);
  const [result, setResult] = useState<AppleMusicMatch | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [appleUrlCopied, setAppleUrlCopied] = useState(false);
  const [shareUrlCopied, setShareUrlCopied] = useState(false);
  const initialSearchHandled = useRef(false);

  async function searchSpotifyUrl(spotifyUrl: string, shouldUpdateUrl: boolean) {
    setIsLoading(true);
    setAppleUrlCopied(false);
    setShareUrlCopied(false);
    setError('');
    setResult(null);
    setUrl(spotifyUrl);

    if (shouldUpdateUrl) {
      const shareUrl = buildShareUrl(spotifyUrl);
      window.history.pushState(null, '', `${shareUrl.pathname}${shareUrl.search}`);
    }

    try {
      const response = await fetch(SPOTIFY_TO_APPLE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: spotifyUrl }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      const data = (await response.json()) as SpotifyToAppleResponse;
      if (!data.found || !data.apple_music?.url) {
        throw new Error('No Apple Music match found.');
      }

      setResult(data.apple_music);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (initialSearchHandled.current) return;
    initialSearchHandled.current = true;

    const sharedUrl = new URLSearchParams(window.location.search).get('url')?.trim();
    if (sharedUrl) {
      window.setTimeout(() => void searchSpotifyUrl(sharedUrl, false), 0);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError('Paste a Spotify URL first.');
      setResult(null);
      return;
    }

    await searchSpotifyUrl(trimmedUrl, true);
  }

  async function handleCopyAppleUrl() {
    if (!result?.url) return;

    try {
      await copyText(result.url);
      setAppleUrlCopied(true);
      window.setTimeout(() => setAppleUrlCopied(false), 1800);
    } catch {
      setError('Could not copy the Apple Music URL.');
    }
  }

  async function handleCopyShareUrl() {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;

    try {
      await copyText(buildShareUrl(trimmedUrl).toString());
      setShareUrlCopied(true);
      window.setTimeout(() => setShareUrlCopied(false), 1800);
    } catch {
      setError('Could not copy the share URL.');
    }
  }

  return (
    <div className="animate-fade-up space-y-8 pb-10">
      <section>
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <Link
            to="/fun"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]/78 transition hover:text-[var(--primary-soft)] active:scale-[0.97]"
          >
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} />
            Back to fun
          </Link>
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Music utility</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--text-main)] md:text-6xl">
            Spotify to Apple Music.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)]/78 md:text-base">
            Paste a Spotify track URL and find its Apple Music match.
          </p>
        </div>
      </section>

      <section className="brand-surface p-5 md:p-6" aria-label="Spotify to Apple Music converter">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="spotify-url" className="block text-sm font-semibold text-[var(--text-main)]">
            Spotify URL
          </label>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              id="spotify-url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://open.spotify.com/track/..."
              disabled={isLoading}
              className="min-h-12 flex-1 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-deep)]/42 px-4 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-muted)]/44 focus:border-[var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-[var(--border-subtle)] bg-[var(--primary)] px-5 text-sm font-semibold text-white transition hover:opacity-85 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 md:min-w-36"
            >
              {isLoading ? 'Searching...' : 'Find match'}
            </button>
          </div>
          {error && (
            <p className="text-sm leading-6 text-[var(--accent-sand)]" role="alert">
              {error}
            </p>
          )}
        </form>
      </section>

      {result && (
        <section className="brand-surface overflow-hidden" aria-label="Apple Music match">
          <div className="grid gap-0 md:grid-cols-[180px_1fr]">
            {result.artwork && (
              <div className="bg-[var(--bg-deep)]/38 p-5">
                <img
                  src={result.artwork}
                  alt={`${result.album} artwork`}
                  className="aspect-square w-full rounded-[8px] border border-[var(--border-subtle)] object-cover shadow-[var(--shadow-card)]"
                />
              </div>
            )}

            <div className="p-5 md:p-6">
              <p className="font-mono text-xs text-[var(--accent-sand)]">
                Apple Music match{typeof result.confidence === 'number' ? ` · ${result.confidence}% confidence` : ''}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--text-main)]">
                {result.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]/82">
                {result.artist} · {result.album}
              </p>
              <p className="mt-4 break-all font-mono text-xs leading-6 text-[var(--text-muted)]/64">
                {result.url}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--primary)] px-4 text-sm font-semibold text-white transition hover:opacity-85 active:scale-[0.97]"
                >
                  Open
                  <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.5} />
                </a>
                <button
                  type="button"
                  onClick={handleCopyShareUrl}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-deep)]/42 px-4 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--border-default)] hover:text-[var(--primary-soft)] active:scale-[0.97]"
                >
                  {shareUrlCopied ? <Check aria-hidden="true" size={16} strokeWidth={1.5} /> : <Share2 aria-hidden="true" size={16} strokeWidth={1.5} />}
                  {shareUrlCopied ? 'Copied' : 'Share search'}
                </button>
                <button
                  type="button"
                  onClick={handleCopyAppleUrl}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-deep)]/42 px-4 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--border-default)] hover:text-[var(--primary-soft)] active:scale-[0.97]"
                >
                  {appleUrlCopied ? <Check aria-hidden="true" size={16} strokeWidth={1.5} /> : <Clipboard aria-hidden="true" size={16} strokeWidth={1.5} />}
                  {appleUrlCopied ? 'Copied' : 'Copy URL'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function buildShareUrl(spotifyUrl: string) {
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set('url', spotifyUrl);
  return shareUrl;
}

function getInitialSharedSpotifyUrl() {
  return new URLSearchParams(window.location.search).get('url')?.trim() ?? '';
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const copied = document.execCommand('copy');
      if (!copied) {
        throw new Error('Copy command was rejected.');
      }
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

export default SpotifyToApplePage;
