import React from 'react';
import { Fingerprint, ShieldCheck, Zap, KeyRound } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Native biometrics',
    desc: 'Passkeys, Face ID, and Touch ID out of the box via WebAuthn + FIDO2.',
  },
  {
    icon: Zap,
    title: 'One-line integration',
    desc: 'A single call to initialize, plus composable hooks when you need more.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'Hardware-bound keys, phishing resistance, and device attestation.',
  },
  {
    icon: KeyRound,
    title: 'Consent-first',
    desc: 'Privacy-respecting by design with regional hosting and data controls.',
  },
];

export default function Features() {
  return (
    <section className="bg-[#0B0F1A] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Built for devs. Loved by users.</h2>
          <p className="mt-2 max-w-2xl text-white/60">Trade passwords for presence. Our SDK handles the heavy lifting so you can ship auth that feels like magic.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-cyan-400/40">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
