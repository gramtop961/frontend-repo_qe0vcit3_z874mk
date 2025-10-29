import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Snippets from './components/Snippets';
import Features from './components/Features';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B15] text-white">
      <Hero />
      <TrustBar />
      <Snippets />
      <Features />

      {/* Footer CTA */}
      <footer className="border-t border-white/10 bg-[#070B15] py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Start in minutes</h3>
            <p className="mt-2 max-w-2xl text-white/60">Drop in our SDK and go live today. Your users get seamless biometrics, you get fewer tickets and higher conversion.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#get-started" className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400">Get API keys</a>
              <a href="#docs" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10">Read the docs</a>
            </div>
            <p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} PhantomPass Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
