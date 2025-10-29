import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const snippets = {
  javascript: {
    label: 'JavaScript',
    code: "import { initAuth } from '@phantompass/sdk';\ninitAuth({ projectId: 'proj_123', mode: 'biometric' }); // one line. you're live",
  },
  node: {
    label: 'Node',
    code: "// server setup\nconst auth = require('@phantompass/node');\nauth.init('proj_123'); // one line to enable passkeys",
  },
  curl: {
    label: 'cURL',
    code: "curl -X POST https://api.phantompass.dev/v1/init -H 'Authorization: Bearer sk_live_***' -d projectId=proj_123",
  },
};

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  };

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0A0E18] p-4 text-sm leading-relaxed text-white/90">
        <code>{code}</code>
      </pre>
      <button
        onClick={onCopy}
        className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
        aria-label="Copy code"
      >
        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export default function Snippets() {
  const [active, setActive] = useState('javascript');

  return (
    <section id="get-started" className="bg-[#070B15] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">One line to ship passkeys</h2>
            <p className="mt-2 max-w-2xl text-white/60">Drop-in biometrics that your users already trust. Copy, paste, and move on to your roadmap.</p>
          </div>
          <div className="inline-flex overflow-hidden rounded-lg border border-white/10">
            {Object.entries(snippets).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 text-sm transition ${
                  active === key ? 'bg-white/10 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <CodeBlock code={snippets[active].code} />

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">
            npm i @phantompass/sdk
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">
            yarn add @phantompass/sdk
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">
            pnpm add @phantompass/sdk
          </div>
        </div>
      </div>
    </section>
  );
}
