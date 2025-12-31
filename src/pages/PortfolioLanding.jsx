import React from "react";
import profile from "../assets/profile.png";

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="relative mt-10 overflow-hidden rounded-[28px]">
          <div className="grid items-center gap-12 py-10 lg:grid-cols-2 lg:py-16">
            {/* Left Content */}
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#F4B400] uppercase">
                Front End Developer
              </p>

              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] text-slate-900 sm:text-6xl">
                Hello, my name <br />
                is Tanvir Ahmad
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
                I’m a Front End Developer focused on building modern,
                responsive, and user-friendly web applications. I specialize in
                React, Tailwind CSS, and JavaScript, with experience creating
                dashboards, blogs, authentication flows, and scalable UI
                components. I enjoy turning complex ideas into clean, intuitive
                interfaces with great user experience.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F4B400] px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:brightness-95"
                >
                  Projects
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-900/20 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Image + Blob */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Yellow Blob */}
              <div
                className="absolute right-0 top-1/2 h-[420px] w-[520px] -translate-y-1/2"
                style={{
                  background: "#F4B400",
                  borderRadius: "999px",
                  clipPath:
                    "path('M 477 52 C 540 113 531 250 460 322 C 389 394 252 401 164 360 C 76 319 37 231 54 151 C 71 71 141 -2 238 0 C 335 2 414 -11 477 52 Z')",
                }}
              />

              {/* Profile Image */}
              {/* Profile Image */}
              <div className="relative z-10 h-[420px] w-[320px] overflow-hidden rounded-l-full bg-[#F6F7FB] flex items-center justify-center">
                <img
                  src={profile}
                  alt="Tanvir Ahmad"
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-semibold text-slate-900">
              Projects
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#F4B400]" />
          </div>

          {/* Project Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <div className="h-36 rounded-xl bg-slate-100" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Project Title {i + 1}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Short description of your project goes here.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
