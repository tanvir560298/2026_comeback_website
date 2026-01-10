import React, { useMemo, useState } from "react";

const modules = [
  {
    id: "phy-ch1",
    title: "Chapter 1: Physics Notes",
    items: [
      {
        id: "phy-ch1-notes",
        type: "notes",
        title: "Chapter 1 Notes",
        duration: "PDF",
        // ✅ IMPORTANT: put pdf inside /public and use like this:
        fileUrl: "public/Physics_pdf_holder/Scanned_20260110-1201.pdf",
      },
      // later you can add video/hw like this:
      // {
      //   id: "phy-ch1-video-1",
      //   type: "video",
      //   title: "Class Video 1",
      //   duration: "29 min",
      //   youtubeId: "lnAVltfSyLM",
      // 
      // 
      // 
      // },
      // {
      //   id: "phy-ch1-hw",
      //   type: "hw",
      //   title: "Homework 1",
      //   duration: "PDF",
      //   fileUrl: "/pdf/physics/hw1.pdf",
      // },
    ],
  },
];

export default function Physics() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [activeItemId, setActiveItemId] = useState(modules[0].items[0].id);

  const activeModule = useMemo(
    () => modules.find((m) => m.id === activeModuleId),
    [activeModuleId]
  );

  const activeItem = useMemo(
    () => activeModule.items.find((i) => i.id === activeItemId),
    [activeModule, activeItemId]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm text-white/70">{activeModule.title}</p>
              <h1 className="mt-1 text-2xl font-black">{activeItem.title}</h1>
            </div>

            <div className="p-6">
              {/* VIDEO */}
              {activeItem.type === "video" && (
                <div className="space-y-4">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${activeItem.youtubeId}?rel=0&modestbranding=1`}
                      title="Class video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* NOTES */}
              {activeItem.type === "notes" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5">
                    <p className="text-white/70 text-sm">
                      Open / download the notes:
                    </p>

                    <a
                      href={activeItem.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-xl bg-violet-500/90 hover:bg-violet-500 px-4 py-2 text-sm font-extrabold text-slate-950"
                    >
                      Open Notes PDF
                    </a>

                    <p className="mt-3 text-xs text-white/50">
                      Tip: Put PDFs inside <span className="font-bold">public/pdf/...</span> then use
                      paths like <span className="font-bold">/pdf/physics/file.pdf</span>.
                    </p>
                  </div>
                </div>
              )}

              {/* HOMEWORK */}
              {activeItem.type === "hw" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5">
                    <p className="text-white/70 text-sm">Homework sheet:</p>

                    <a
                      href={activeItem.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-500 px-4 py-2 text-sm font-extrabold text-slate-950"
                    >
                      Open Homework PDF
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <aside className="rounded-3xl bg-gradient-to-b from-violet-900/40 to-slate-900/30 ring-1 ring-white/10 overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm text-white/70">Course Content</p>
              <h2 className="mt-1 text-xl font-black">Physics</h2>
            </div>

            <div className="p-4">
              {modules.map((m) => (
                <div key={m.id} className="mb-4">
                  <button
                    onClick={() => {
                      setActiveModuleId(m.id);
                      setActiveItemId(m.items[0].id);
                    }}
                    className="w-full rounded-2xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-3 text-left"
                  >
                    <p className="font-bold">{m.title}</p>
                  </button>

                  <div className="mt-3 space-y-2">
                    {m.items.map((item) => {
                      const active = item.id === activeItemId;

                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveItemId(item.id)}
                          className={[
                            "w-full rounded-2xl px-4 py-3 text-left ring-1 transition",
                            active
                              ? "bg-fuchsia-500/30 ring-fuchsia-300/30"
                              : "bg-white/5 hover:bg-white/10 ring-white/10",
                          ].join(" ")}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{item.title}</p>
                              <p className="text-xs text-white/60">{item.duration}</p>
                            </div>
                            <span className="text-xs font-bold text-white/60">
                              {item.type.toUpperCase()}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
