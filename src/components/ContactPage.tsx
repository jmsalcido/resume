import React from 'react';

interface ContactPageProps {
  email: string;
  linkedin: string;
  github: string;
}

function ContactPage({ email, linkedin, github }: ContactPageProps) {
  return (
    <div className="animate-fade-up pb-10 pt-10">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Contact</div>
          <h1 className="mt-4 font-display text-4xl tracking-[-0.045em] md:text-6xl">
            Build something with structure and breath.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#063C6B]/72">
            Software, systems, workflow design, and products that need engineering judgment without losing aesthetic discipline.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:justify-self-end">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center rounded-full border border-[#063C6B] px-6 py-3 text-sm text-[#063C6B] transition hover:border-[#F07A20] hover:text-[#F07A20]"
          >
            {email}
          </a>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#063C6B]/40 px-6 py-3 text-sm text-[#063C6B]/80 transition hover:border-[#F07A20] hover:text-[#F07A20]"
          >
            linkedin.com/in/{linkedin}
          </a>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#063C6B]/40 px-6 py-3 text-sm text-[#063C6B]/80 transition hover:border-[#F07A20] hover:text-[#F07A20]"
          >
            github.com/{github}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
