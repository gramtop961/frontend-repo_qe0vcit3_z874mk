import React from 'react';
import { ShieldCheck, Lock, CheckCircle, Globe } from 'lucide-react';

const Item = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 text-white/70">
    <Icon size={18} className="text-emerald-400" />
    <span className="text-sm">{label}</span>
  </div>
);

export default function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-[#0B0F1A]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Item icon={ShieldCheck} label="SOC 2 Type II" />
        <Item icon={Lock} label="Passkeys & WebAuthn" />
        <Item icon={CheckCircle} label="FIDO2 compliant" />
        <Item icon={Globe} label="99.99% uptime SLA" />
      </div>
    </div>
  );
}
