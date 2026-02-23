import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const LINES = [
  "Hello, it’s me",
  "Erwin Galura",
  "Full-Stack Web Developer & Designer",
];

function useTypewriterOnce(lines, speed = 60, pause = 450) {
  const [shown, setShown] = useState(() => lines.map(() => ""));
  const [done, setDone] = useState(false);
  const runIdRef = useRef(0);

  useEffect(() => {
    runIdRef.current += 1;
    const runId = runIdRef.current;

    let timeoutId;
    const sleep = (ms) =>
      new Promise((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    (async () => {
      const out = lines.map(() => "");
      setShown(out);
      setDone(false);

      for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j <= lines[i].length; j++) {
          if (runIdRef.current !== runId) return; // cancelled by remount
          out[i] = lines[i].slice(0, j);
          setShown([...out]);
          await sleep(speed);
        }
        await sleep(pause);
      }

      if (runIdRef.current === runId) setDone(true);
    })();

    return () => clearTimeout(timeoutId);
  }, []); // run only on real mount (refresh)

  return { shown, done };
}

export default function Home() {
  const stars = useMemo(() => {
    return Array.from({ length: 110 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 6;
      const duration = 3 + Math.random() * 4;
      const opacity = 0.2 + Math.random() * 0.7;
      return { i, size, left, top, delay, duration, opacity };
    });
  }, []);

  const { shown, done } = useTypewriterOnce(LINES, 48, 700);

  return (
    <section
      id="home"
      className="scroll-mt-32 relative min-h-[100vh] w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(16,185,129,0.18), rgba(6,24,38,0) 45%), radial-gradient(circle at 80% 50%, rgba(248,250,252,0.10), rgba(6,24,38,0) 52%), #061826",
      }}
    >
      {/* Galaxy layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/milkyway-bg.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 animate-twinkle opacity-60" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <div
            key={s.i}
            className="absolute rounded-full animate-star-twinkle"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              opacity: s.opacity,
              background: "rgba(248,250,252,0.95)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 pt-44 sm:pt-48 lg:pt-52 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <p className="text-white/70 text-sm">
              {shown[0]}
              {shown[0].length !== LINES[0].length && (
                <span className="typing-caret" aria-hidden="true">
                  |
                </span>
              )}
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald">
              {shown[1]}
              {shown[1].length !== LINES[1].length && (
                <span className="typing-caret" aria-hidden="true">
                  |
                </span>
              )}
            </h1>

            <h2 className="mt-2 text-lg sm:text-xl font-semibold text-white/85">
              And I’m a{" "}
              <span className="text-emerald-400">
                {shown[2]}
                {shown[2].length !== LINES[2].length && (
                  <span className="typing-caret" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            </h2>

            <p className="mt-5 text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I design and build modern, responsive web apps—from{" "}
              <span className="text-emerald font-semibold">UI/UX</span> to{" "}
              <span className="text-emerald font-semibold">frontend</span> and{" "}
              <span className="text-emerald font-semibold">backend</span>. I
              focus on clean code, strong visual hierarchy, and smooth user
              experiences using{" "}
              <span className="text-emerald font-semibold">React</span>,{" "}
              <span className="text-emerald font-semibold">JavaScript</span>,{" "}
              <span className="text-emerald font-semibold">Tailwind CSS</span>,
              and modern APIs.
            </p>

            {/* Social icons (hover emerald) */}
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/errwwin25/",
                  icon: "fab fa-facebook-f",
                },
                {
                  label: "LinkedIn",
                  href: "https://ph.linkedin.com/in/errwwin25",
                  icon: "fab fa-linkedin-in",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/errwwin25/",
                  icon: "fab fa-instagram",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/errwwin256",
                  icon: "fab fa-github",
                },
              ].map((x) => (
                <a
                  key={x.label}
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={x.label}
                  title={x.label}
                  className="
                    w-11 h-11 rounded-full
                    border border-white/15
                    bg-white/5 backdrop-blur
                    flex items-center justify-center
                    text-white/85
                    transition
                    hover:bg-white/10
                    hover:text-emerald-300
                    hover:border-emerald-300/40
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70
                  "
                >
                  <i className={x.icon} />
                </a>
              ))}
            </div>

            {/* CTA (bright nova emerald green) */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="
                  px-8 py-3.5 rounded-full
                  bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),rgba(255,255,255,0)_55%),linear-gradient(90deg,#00F5A0,#22C55E)]
                  text-[#061826]
                  font-extrabold
                  shadow-[0_22px_70px_rgba(0,245,160,0.34)]
                  hover:brightness-110 transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200
                "
              >
                More About Me
              </button>
            </div>
          </div>

          {/* RIGHT: Bigger neon ring photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px]">
              <div
                className="absolute -inset-7 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,245,160,0.30), rgba(6,24,38,0) 62%)",
                }}
              />

              <div className="absolute inset-0 rounded-full ring-spin">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 180deg, rgba(0,245,160,0.0), rgba(0,245,160,0.95), rgba(248,250,252,0.85), rgba(0,245,160,0.0))",
                    WebkitMask:
                      "radial-gradient(circle, transparent 58%, #000 60%)",
                    mask: "radial-gradient(circle, transparent 58%, #000 60%)",
                    filter: "drop-shadow(0 0 20px rgba(0,245,160,0.45))",
                  }}
                />
              </div>

              <div className="absolute inset-5 rounded-full overflow-hidden border border-white/15 bg-black/25 shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}erwinm.png`}
                  alt="Erwin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
