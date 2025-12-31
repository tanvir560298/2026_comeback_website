import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "web-development-why-html-first",
    title: "Web Development কী? কেন HTML দিয়ে শুরু করবো?",
    excerpt:
      "Beginner-friendly: Website কী, HTML/CSS/JS কার কাজ কী, আর আজকের শেষে index.html বানাবে ✅",
    minutes: "8–10 min",
    level: "Beginner",
    date: "2025-12-29",
    cover: "/assets/blog/covers/blog1.png", // তুমি চাইলে পরে image বসাবে
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900 text-center">
          Blogs
        </h1>
        <p className="mt-2 text-slate-600 text-center">
          Daily 10 min notes + tasks — পড়ো, করো, শিখো ✅
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Cover */}
              <div className="aspect-[16/10] bg-gradient-to-br from-indigo-100 to-emerald-100 grid place-items-center">
                {/* image থাকলে দেখাবে, না থাকলে placeholder */}
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="text-sm font-extrabold text-slate-700">
                    BLOG COVER
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                {/* Title top-center */}
                <h2 className="text-lg font-extrabold text-slate-900 text-center leading-snug">
                  {p.title}
                </h2>

                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold">
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-700">
                    {p.level}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">
                    {p.minutes}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">
                    {p.date}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 text-center">
                  {p.excerpt}
                </p>

                <div className="mt-5 text-center">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-extrabold text-white group-hover:bg-indigo-500 transition">
                    Read Blog →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
