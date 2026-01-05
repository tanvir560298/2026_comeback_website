import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ta_calc2_progress_v1";

const modules = [
  {
    id: "c2-ch1",
    title: "Chapter 5.1: Area Problem",
    items: [
      {
        id: "c2-ch5.1-video-1",
        type: "video",
        title: "Video Class: Introduction",
        duration: "29 min",
        youtubeId:"LE5W4PrS-as",
      },
      {
        id: "c2-ch5.1-video-2",
        type: "video",
        title: "Video Class: Lecture Notes",
        duration: "30 min",
        youtubeId:"lnAVltfSyLM",
      },
      {
        id: "c2-ch1-notes",
        type: "notes",
        title: "Notes (PDF)",
        duration: "PDF",
        fileUrl: "/notes/calc2/ch1-notes.pdf", // ✅ replace
      },
      {
        id: "c2-ch1-hw",
        type: "hw",
        title: "Homework (Sheet)",
        duration: "PDF",
        fileUrl: "/hw/calc2/ch1-hw.pdf", // ✅ replace
      },
    ],
  },
];

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

const defaultChapterProgress = { videoDone: false, notesDone: false, hwDone: false };

export default function Calculus2() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [activeItemId, setActiveItemId] = useState(modules[0].items[0].id);
  const [progress, setProgress] = useState({});
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const activeModule = useMemo(
    () => modules.find((m) => m.id === activeModuleId),
    [activeModuleId]
  );

  const chapterProgress = progress[activeModuleId] || defaultChapterProgress;

  const activeItem = useMemo(
    () => activeModule.items.find((i) => i.id === activeItemId),
    [activeModule, activeItemId]
  );

  const isUnlocked = (type) => {
    if (type === "video") return true;
    if (type === "notes") return chapterProgress.videoDone;
    if (type === "hw") return chapterProgress.videoDone && chapterProgress.notesDone;
    return false;
  };

  const showMsg = (text) => {
    setMsg(text);
    window.clearTimeout(window.__taMsgTimer);
    window.__taMsgTimer = window.setTimeout(() => setMsg(""), 2500);
  };

  const markDone = (type) => {
    setProgress((p) => ({
      ...p,
      [activeModuleId]: {
        ...chapterProgress,
        ...(type === "video" ? { videoDone: true } : {}),
        ...(type === "notes" ? { notesDone: true } : {}),
        ...(type === "hw" ? { hwDone: true } : {}),
      },
    }));

    if (type === "video") showMsg("✅ Video completed — Notes unlocked!");
    if (type === "notes") showMsg("✅ Notes completed — Homework unlocked!");
    if (type === "hw") showMsg("🎉 Homework done — Chapter completed!");
  };

  const firstUnlockedItemId = useMemo(() => {
    const items = activeModule.items;
    // Pick the first unlocked item, preference: hw if unlocked, else notes if unlocked, else video
    const hw = items.find((i) => i.type === "hw");
    const notes = items.find((i) => i.type === "notes");
    const video = items.find((i) => i.type === "video");
    if (hw && isUnlocked("hw")) return hw.id;
    if (notes && isUnlocked("notes")) return notes.id;
    return video?.id || items[0].id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModuleId, chapterProgress.videoDone, chapterProgress.notesDone]);

  useEffect(() => {
    // when chapter progress changes, keep user on the best unlocked section
    setActiveItemId((prev) => {
      const stillExists = activeModule.items.some((i) => i.id === prev);
      if (!stillExists) return firstUnlockedItemId;

      const prevItem = activeModule.items.find((i) => i.id === prev);
      if (prevItem && isUnlocked(prevItem.type)) return prev;

      return firstUnlockedItemId;
    });
  }, [firstUnlockedItemId, activeModule, chapterProgress.videoDone, chapterProgress.notesDone]);

  const onSelectItem = (item) => {
    if (!isUnlocked(item.type)) {
      if (item.type === "notes") showMsg("🔒 Notes locked — finish Video first.");
      if (item.type === "hw") showMsg("🔒 Homework locked — finish Notes first.");
      return;
    }
    setActiveItemId(item.id);
  };

  const resetChapter = () => {
    setProgress((p) => ({
      ...p,
      [activeModuleId]: { ...defaultChapterProgress },
    }));
    showMsg("↩️ Chapter progress reset.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/70">{activeModule.title}</p>
                <h1 className="mt-1 text-2xl font-black">{activeItem.title}</h1>
              </div>

              <button
                onClick={resetChapter}
                className="shrink-0 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/10 px-3 py-2 text-xs font-extrabold"
              >
                Reset
              </button>
            </div>

            {msg && (
              <div className="px-6 pt-4">
                <div className="rounded-2xl bg-amber-200/10 text-amber-200 ring-1 ring-amber-300/20 px-4 py-3 text-sm font-semibold">
                  {msg}
                </div>
              </div>
            )}

            <div className="p-6">
              {/* VIDEO */}
              {activeItem.type === "video" && (
                <div className="space-y-4">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${activeItem.youtubeId}`}
                      title="Class video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => markDone("video")}
                      className="rounded-xl bg-emerald-500/90 hover:bg-emerald-500 px-4 py-2 text-sm font-extrabold text-slate-950"
                    >
                      Mark video as watched ✅
                    </button>

                    <span className="text-sm text-white/60">
                      {chapterProgress.videoDone
                        ? "Video completed ✔ Notes unlocked"
                        : "Finish video to unlock Notes"}
                    </span>
                  </div>
                </div>
              )}

              {/* NOTES */}
              {activeItem.type === "notes" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-5">
                    <p className="text-white/70 text-sm">
                      Download / open the notes:
                    </p>
                    <a
                      href={activeItem.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-xl bg-violet-500/90 hover:bg-violet-500 px-4 py-2 text-sm font-extrabold text-slate-950"
                    >
                      Open Notes PDF
                    </a>
                  </div>

                  <button
                    onClick={() => markDone("notes")}
                    className="rounded-xl bg-emerald-500/90 hover:bg-emerald-500 px-4 py-2 text-sm font-extrabold text-slate-950"
                  >
                    I read the notes ✅ (Unlock Homework)
                  </button>

                  <p className="text-sm text-white/60">
                    {chapterProgress.notesDone
                      ? "Notes completed ✔ Homework unlocked"
                      : "Mark notes as complete to unlock Homework"}
                  </p>
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

                  <button
                    onClick={() => markDone("hw")}
                    className="rounded-xl bg-emerald-500/90 hover:bg-emerald-500 px-4 py-2 text-sm font-extrabold text-slate-950"
                  >
                    Mark homework as done ✅
                  </button>

                  {chapterProgress.hwDone && (
                    <p className="text-sm text-emerald-300 font-semibold">
                      Great! Chapter completed 🎉
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <aside className="rounded-3xl bg-gradient-to-b from-violet-900/40 to-slate-900/30 ring-1 ring-white/10 overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm text-white/70">Course Content</p>
              <h2 className="mt-1 text-xl font-black">Calculus 2</h2>
            </div>

            <div className="p-4">
              {modules.map((m) => {
                const cp = progress[m.id] || defaultChapterProgress;
                const chapterDone = cp.videoDone && cp.notesDone && cp.hwDone;

                return (
                  <div key={m.id} className="mb-4">
                    <button
                      onClick={() => {
                        setActiveModuleId(m.id);
                        setActiveItemId(m.items[0].id);
                      }}
                      className="w-full rounded-2xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-3 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-bold">{m.title}</p>
                        {chapterDone ? (
                          <span className="text-emerald-300 text-sm font-extrabold">✓</span>
                        ) : (
                          <span className="text-white/40 text-xs">In progress</span>
                        )}
                      </div>
                    </button>

                    <div className="mt-3 space-y-2">
                      {m.items.map((item) => {
                        const locked = !(item.type === "video"
                          ? true
                          : item.type === "notes"
                          ? cp.videoDone
                          : cp.videoDone && cp.notesDone);

                        const active = item.id === activeItemId;

                        return (
                          <button
                            key={item.id}
                            onClick={() => onSelectItem(item)}
                            className={[
                              "w-full rounded-2xl px-4 py-3 text-left ring-1 transition",
                              active
                                ? "bg-fuchsia-500/30 ring-fuchsia-300/30"
                                : "bg-white/5 hover:bg-white/10 ring-white/10",
                              locked ? "opacity-50 cursor-not-allowed" : "",
                            ].join(" ")}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold">
                                  {item.title}
                                  {locked && (
                                    <span className="ml-2 text-xs text-amber-200 font-bold">
                                      🔒 Locked
                                    </span>
                                  )}
                                </p>
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
                );
              })}

              <div className="mt-6 rounded-2xl bg-black/20 ring-1 ring-white/10 p-4">
                <p className="text-sm font-bold">Unlock Rules</p>
                <ul className="mt-2 text-sm text-white/70 space-y-1">
                  <li>1) Watch the video → unlock Notes</li>
                  <li>2) Complete Notes → unlock Homework</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
