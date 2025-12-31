import React from "react";
import hero from "../assets/blog/hero-blog-1.png";

export default function BlogPost1() {
  return (
    <div className="bg-[#f7f4ff]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left */}
            <div className="text-white">
              <p className="text-xs font-extrabold tracking-[0.22em] text-white/80">
                DAILY 10 MIN • BLOG #1 • BEGINNER
              </p>

              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Web Development কী?
                <span className="text-emerald-300"> HTML</span> দিয়ে কেন শুরু করবো?
              </h1>

              <p className="mt-5 max-w-xl text-white/85 text-sm sm:text-base">
                এই পোস্টে তুমি শিখবে—Website কী, HTML/CSS/JavaScript কার কাজ কী, আর
                আজকের শেষে তুমি তোমার প্রথম{" "}
                <span className="font-bold">index.html</span> file বানিয়ে ফেলবে ✅
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#start"
                  className="w-full sm:w-auto rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-indigo-700 shadow hover:bg-white/95 text-center"
                >
                  Explore Notes
                </a>
                <a
                  href="#tasks"
                  className="w-full sm:w-auto rounded-xl bg-indigo-500/30 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-indigo-500/40 text-center"
                >
                  Today’s Tasks
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-white/10 p-4 sm:p-5 ring-1 ring-white/20 backdrop-blur">
              <div className="overflow-hidden rounded-2xl bg-black/20 p-2 sm:p-3">
                <div className="aspect-[16/12] w-full overflow-hidden rounded-2xl">
                  <img
                    src={hero}
                    alt="Web Development with HTML"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                <Pill title="HTML" />
                <Pill title="CSS" />
                <Pill title="JavaScript" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,360px)]">
          {/* MAIN */}
          <article className="space-y-8 min-w-0">
            <Card>
              <h2 id="start" className="text-2xl font-black text-slate-900">
                Web Development কী? (এক লাইনে)
              </h2>
              <p className="mt-2 text-slate-700">
                Website হলো browser-এ দেখা যায় এমন page/pageগুলো (যেমন Google)। আর Web
                Development হলো সেই website বানানোর পুরো process।
              </p>

              <Callout type="takeaway" title="Key Takeaways">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Website = browser-এ দেখা যায় এমন জিনিস</li>
                  <li>Web Development = website বানানো + maintain করা</li>
                  <li>শুরু করবো HTML দিয়ে (structure আগে)</li>
                </ul>
              </Callout>
            </Card>

            <Card>
              <h2 className="text-2xl font-black text-slate-900">
                HTML, CSS, JavaScript — কার কাজ কী?
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <InfoCard label="HTML" color="from-sky-100 to-sky-50" text="Structure / Skeleton" />
                <InfoCard label="CSS" color="from-orange-100 to-orange-50" text="Style / Design" />
                <InfoCard label="JavaScript" color="from-purple-100 to-purple-50" text="Interaction / Logic" />
              </div>

              <Callout type="info" title="Important">
                HTML কোনো programming language না। এটা markup language—ট্যাগ দিয়ে content mark করে।
              </Callout>
            </Card>

            <Card>
              <h2 className="text-2xl font-black text-slate-900">Browser কীভাবে HTML পড়ে?</h2>
              <p className="mt-2 text-slate-700">
                Chrome/Safari হলো এমন software যা <b>.html</b> file পড়ে screen-এ show করে।
              </p>

              <Code title="Step 1: file এ লিখো">Hello World</Code>
              <Code title="Step 2: save as">index.html</Code>

              <Callout type="takeaway" title="Wow moment">
                তুমি যা লিখবে (HTML) → browser সেটা পড়ে show করবে ✅
              </Callout>
            </Card>

            <Card>
              <h2 id="tasks" className="text-2xl font-black text-slate-900">
                আজকের টাস্ক (10–15 মিনিট)
              </h2>

              <TaskBox num="1" title="Folder + File তৈরি করো" desc="একটা folder বানাও: my-first-website, তারপর index.html file তৈরি করো।" />
              <TaskBox
                num="2"
                title="HTML লিখে browser-এ খুলে দেখো"
                desc="h1 এ তোমার নাম, আর p তে 1টা sentence লিখো।"
                code={`<h1>আমার নাম: ______</h1>\n<p>আজ আমি Web Development শুরু করলাম!</p>`}
              />
              <TaskBox num="3" title="Bonus" desc="browser থেকে screenshot নিয়ে teacher/গ্রুপে শেয়ার করো ✅" />
            </Card>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-sm font-black text-slate-900">Table of Contents</h3>
              <nav className="mt-3 space-y-2 text-sm">
                <TocLink href="#start" label="Web Dev কী?" />
                <TocLink href="#tasks" label="আজকের Tasks" />
              </nav>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 p-4 ring-1 ring-slate-200">
                <p className="text-sm font-extrabold text-slate-900">Teacher Note</p>
                <p className="mt-1 text-sm text-slate-700">
                  Student শুধু screenshot দিলেই completion count করো—motivation অনেক বেড়ে যায়।
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

/* Components */
function Pill({ title }) {
  return (
    <div className="rounded-2xl bg-white/10 px-2 py-2 text-center text-[11px] sm:text-xs font-extrabold text-white ring-1 ring-white/20">
      {title}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-3xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
      {children}
    </div>
  );
}

function Callout({ type = "info", title, children }) {
  const styles =
    type === "takeaway"
      ? "from-emerald-50 to-emerald-100/30 ring-emerald-200"
      : "from-indigo-50 to-indigo-100/30 ring-indigo-200";

  return (
    <div className={`mt-5 rounded-2xl bg-gradient-to-br ${styles} p-4 ring-1`}>
      <p className="text-sm font-extrabold text-slate-900">{title}</p>
      <div className="mt-2 text-sm text-slate-700">{children}</div>
    </div>
  );
}

function Code({ title, children }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-extrabold text-slate-600">{title}</p>
      <pre className="mt-2 overflow-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100 ring-1 ring-slate-800">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function InfoCard({ label, text, color }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${color} p-4 ring-1 ring-slate-200`}>
      <p className="text-sm font-black text-slate-900">{label}</p>
      <p className="mt-1 text-sm text-slate-700">{text}</p>
    </div>
  );
}

function TaskBox({ num, title, desc, code }) {
  return (
    <div className="mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <div className="flex items-start gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-600 text-sm font-black text-white">
          {num}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-extrabold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-700">{desc}</p>

          {code ? (
            <pre className="mt-3 overflow-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100 ring-1 ring-slate-800">
              <code>{code}</code>
            </pre>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TocLink({ href, label }) {
  return (
    <a
      href={href}
      className="block rounded-xl px-3 py-2 font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
    >
      {label}
    </a>
  );
}
