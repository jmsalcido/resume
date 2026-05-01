import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clipboard, Check } from 'lucide-react';

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
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<AppleMusicMatch | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError('Paste a Spotify URL first.');
      setResult(null);
      return;
    }

    setIsLoading(true);
    setCopied(false);
    setError('');
    setResult(null);

    try {
      const response = await fetch(SPOTIFY_TO_APPLE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: trimmedUrl }),
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

  async function handleCopy() {
    if (!result?.url) return;

    try {
      await navigator.clipboard.writeText(result.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setError('Could not copy the Apple Music URL.');
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
                  onClick={handleCopy}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-deep)]/42 px-4 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--border-default)] hover:text-[var(--primary-soft)] active:scale-[0.97]"
                >
                  {copied ? <Check aria-hidden="true" size={16} strokeWidth={1.5} /> : <Clipboard aria-hidden="true" size={16} strokeWidth={1.5} />}
                  {copied ? 'Copied' : 'Copy URL'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SpotifyToApplePage;
