import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] text-white">
      <div className="absolute inset-0">
        {/* Soft radial glow background */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Production-ready
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Passwordless authentication with biometrics that feels invisible to your users and effortless to ship. One line of code, enterprise-grade security.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400"
              >
                Get started
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10"
              >
                View docs
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">Built for modern stacks • Web • iOS • Android • Node • Python</p>
          </div>

          <div className="relative h-[380px] w-full md:h-[520px]">
            {/* 3D identity card scene */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5/0 backdrop-blur-sm">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* subtle gradient overlay to blend with background */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
