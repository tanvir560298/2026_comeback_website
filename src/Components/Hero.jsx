import React from "react";
import HeroAnimated from "./HeroAnimated";

const Hero = () => {
  return (
    <div>
      <section className="overflow-hidden relative bg-linear-to-br from-violet-900 via-blue-700 to-sky-700">
        {/* soft highlight */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          {/* Left */}
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-white/70">
              A great target leads you to a great future
            </p>

            <h1 className="mt-4 text-white font-black leading-[1.05] text-4xl sm:text-5xl lg:text-[52px]">
              Let's learn <span className="text-emerald-300">together</span> —
              <br />
              notes, practice & guidance,
              <br />
              always free.
            </h1>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button className="px-5 py-3 rounded-xl font-extrabold text-sm text-white border border-white/25 bg-white/10 hover:bg-white/15">
                Explore Notes
              </button>
              <button className="px-2 py-3 font-bold text-sm text-white/85 hover:text-white hover:underline text-left">
                Request a Topic
              </button>
            </div>

            <div className="mt-6 max-w-xl bg-white rounded-xl p-2 shadow-2xl shadow-black/20 flex flex-col sm:flex-row gap-2">
              <input
                className="flex-1 outline-none px-3 py-3 text-sm rounded-lg"
                placeholder="What do you want to learn today?"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-5 py-3 rounded-lg">
                Search
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            {/* ONLY CHANGE IS HERE 👇 */}
            <div className="w-full  rounded-2xl overflow-hidden border border-white/15 bg-white/10">
              <div className="relative aspect-5/5">
                 <HeroAnimated />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
