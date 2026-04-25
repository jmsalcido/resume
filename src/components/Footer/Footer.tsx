import React from 'react';

function Footer() {
  return (
    <footer className="relative z-10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)]/68 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono tracking-[0.08em]">Jose Salcido · {new Date().getFullYear()}</p>
        <a
          href="https://jmsalcido.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[var(--primary-soft)]"
        >
          jmsalcido.dev
        </a>
      </div>
    </footer>
  );
}

export default Footer;
