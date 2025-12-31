import React from "react";
import { useParams, Link } from "react-router-dom";
import BlogPost1 from "./BlogPost1";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <Link to="/blog" className="font-extrabold text-indigo-700">
          ← Back to Blogs
        </Link>
      </div>

      {slug === "web-development-why-html-first" ? (
        <BlogPost1 />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <p className="text-slate-700">This blog is coming soon…</p>
          </div>
        </div>
      )}
    </div>
  );
}
