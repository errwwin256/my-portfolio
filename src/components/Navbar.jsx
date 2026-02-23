import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { NAV_LINKS } from "../data/navLinks";

export default function Navbar({ open, setOpen }) {
  const reduceMotion = useReducedMotion();
  const [activeHash, setActiveHash] = useState("#home");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  const links = useMemo(
    () =>
      NAV_LINKS.map((label) => {
        const id = label.toLowerCase();
        return { label, id, hash: `#${id}` };
      }),
    [],
  );

  // Smooth scroll to section + ✅ instant active highlight
  const goTo = (hash) => {
    setOpen(false);
    setActiveHash(hash); // ✅ immediate visual feedback (fixes Contact click)

    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = hash;
  };

  // ESC close + lock body scroll when menu open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  // ScrollSpy + Progress (throttled via requestAnimationFrame)
  useEffect(() => {
    const sectionEls = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const calc = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;

      // Progress
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(p);

      // ✅ Force Contact active when near bottom (fixes footer never reaching threshold)
      const nearBottom = scrollTop + doc.clientHeight >= doc.scrollHeight - 12;
      if (nearBottom) {
        setActiveHash("#contact");
        return;
      }

      // Active section
      const threshold = 160; // ✅ a bit bigger to match larger navbar
      let current = "#home";

      for (let i = 0; i < sectionEls.length; i++) {
        const el = sectionEls[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) current = `#${el.id}`;
      }
      setActiveHash(current);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        calc();
      });
    };

    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [links]);

  return (
    <>
      {/* Top progress line */}
      <div className="fixed top-0 left-0 right-0 z-[90] h-[4px] bg-white/5">
        <div
          className="h-full origin-left"
          style={{
            transform: `scaleX(${progress})`,
            background:
              "linear-gradient(90deg, rgba(16,185,129,0.0), rgba(16,185,129,0.9), rgba(248,250,252,0.9))",
          }}
        />
      </div>

      {/* Floating Glass Bar */}
      <nav className="fixed top-5 left-0 right-0 z-[80] px-3 sm:px-6">
        <div
          className="
            mx-auto max-w-6xl
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_16px_50px_rgba(0,0,0,0.38)]
          "
          style={{
            background:
              "linear-gradient(135deg, rgba(6,24,38,0.82), rgba(6,24,38,0.50))",
          }}
        >
          {/* ✅ bigger height/padding */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4">
            {/* Brand */}
            <button
              onClick={() => goTo("#home")}
              className="flex items-center gap-4 select-none group"
              aria-label="Go to home"
            >
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}Logo.png`}
                  alt="Erwin Logo"
                  className="w-12 h-12 rounded-2xl object-cover ring-1 ring-white/15"
                />
                <span className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
              </div>

              <div className="hidden sm:block text-left">
                <p className="text-[13px] leading-none text-white/65">
                  Web Developer
                </p>
                <p className="text-lg font-semibold text-white tracking-wide">
                  Erwin Galura
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const isActive = activeHash === l.hash;
                return (
                  <li key={l.hash}>
                    <button
                      onClick={() => goTo(l.hash)}
                      className={[
                        "relative px-5 py-2.5 rounded-2xl text-[15px] font-semibold transition",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70",
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 28 }
                          }
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(16,185,129,0.22), rgba(248,250,252,0.08))",
                            border: "1px solid rgba(16,185,129,0.32)",
                            boxShadow: "0 10px 32px rgba(16,185,129,0.18)",
                          }}
                        />
                      )}

                      <span className="relative z-10">{l.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right: CTA + Mobile toggle */}
            <div className="flex items-center gap-2.5">
              {/* ✅ Desktop only */}
              <button
                onClick={() => goTo("#contact")}
                className="
      hidden md:inline-flex
      items-center justify-center
      px-5 py-2.5 rounded-2xl
      text-[15px] font-semibold
      bg-emerald text-midnight
      hover:bg-emeraldSoft
      transition-all duration-300
      shadow-[0_10px_30px_rgba(16,185,129,0.20)]
      hover:shadow-[0_14px_40px_rgba(16,185,129,0.35)]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldSoft
    "
              >
                Let’s Talk
              </button>

              {/* ✅ Mobile only */}
              <button
                onClick={() => setOpen((v) => !v)}
                className="
      md:hidden
      inline-flex items-center justify-center
      w-12 h-12 rounded-2xl
      border border-white/10
      bg-white/5 backdrop-blur
      text-white
      transition
      hover:bg-white/10
      focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldSoft
    "
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span className="text-[26px] leading-none">
                  {open ? "✕" : "☰"}
                </span>
              </button>
            </div>
          </div>

          {/* Section dot rail (desktop) */}
          <div className="hidden md:flex items-center justify-between px-7 pb-4">
            <div className="flex items-center gap-2 text-[13px] text-white/55">
              <span className="inline-block w-2 h-2 rounded-full bg-white/25" />
              <span>Scroll</span>
              <span className="text-white/35">•</span>
              <span className="text-white/80 font-semibold">
                {links.find((x) => x.hash === activeHash)?.label || "Home"}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {links.map((l) => {
                const isActive = activeHash === l.hash;
                return (
                  <button
                    key={`dot-${l.hash}`}
                    onClick={() => goTo(l.hash)}
                    className={[
                      "w-3 h-3 rounded-full transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70",
                      isActive
                        ? "bg-emerald-400 shadow-[0_0_22px_rgba(16,185,129,0.6)]"
                        : "bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                    aria-label={`Go to ${l.label}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay + Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[70] bg-black/55 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-[5.5rem] left-0 right-0 z-[90] px-3 sm:px-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div
                className="
                  mx-auto max-w-6xl
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_18px_55px_rgba(0,0,0,0.45)]
                  overflow-hidden
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,24,38,0.84), rgba(6,24,38,0.56))",
                }}
              >
                <div className="p-3">
                  {links.map((l) => {
                    const isActive = activeHash === l.hash;
                    return (
                      <button
                        key={l.hash}
                        onClick={() => goTo(l.hash)}
                        className={[
                          "w-full text-left px-5 py-4 rounded-2xl",
                          "text-[16px] font-semibold transition",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70",
                          isActive
                            ? "text-white bg-emerald-400/15 border border-emerald-400/25"
                            : "text-white/80 hover:text-white hover:bg-white/5",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span>{l.label}</span>
                          <span className="text-xs px-2 py-1 rounded-lg border border-white/10 text-white/70 bg-white/5">
                            {isActive ? "Active" : "Go"}
                          </span>
                        </div>
                      </button>
                    );
                  })}

                  <button
                    onClick={() => goTo("#contact")}
                    className="
    mt-3 w-full
    px-5 py-4 rounded-2xl
    text-[15px] font-extrabold

    bg-emerald text-midnight
    hover:bg-emeraldSoft

    transition-all duration-300
    shadow-[0_14px_40px_rgba(16,185,129,0.25)]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldSoft
  "
                  >
                    Let’s Talk
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
