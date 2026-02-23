import { SKILLS } from "../data/skills";

export default function Skills() {
  const loop = [...SKILLS, ...SKILLS];

  return (
    <section
      id="skills"
      className="
        relative w-full overflow-hidden
        py-24 px-6 md:px-12
        border-t border-white/10
      "
      style={{
        background:
          "radial-gradient(circle at 18% 18%, rgba(16,185,129,0.14), rgba(6,24,38,0) 45%), radial-gradient(circle at 82% 65%, rgba(248,250,252,0.08), rgba(6,24,38,0) 52%), #061826",
      }}
    >
      {/* Soft emerald glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-emerald/20 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-borderGlass bg-glass text-electric/70 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_18px_rgba(16,185,129,0.55)]" />
          Stack & Tools
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-electric">
          Skills
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emeraldSoft to-electric">
            {" "}
            that ship
          </span>
        </h2>

        <p className="mt-4 text-electric/70 max-w-2xl mx-auto leading-relaxed">
          Modern frontend + backend tools I use to build fast, responsive, and
          maintainable web apps.
        </p>
      </div>

      {/* Scroller */}
      <div className="relative z-10 mt-12">
        {/* Edge fade for premium look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-midnight to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-midnight to-transparent z-20" />

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-fast gap-6 sm:gap-8 whitespace-nowrap will-change-transform">
            {loop.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="
                  group
                  flex flex-col items-center justify-center
                  min-w-[140px] sm:min-w-[160px]
                  rounded-2xl p-4
                  border border-borderGlass
                  bg-glass backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald/40
                  hover:bg-white/10
                  hover:shadow-[0_0_28px_rgba(16,185,129,0.30)]
                "
              >
                <div
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-2xl
                    flex items-center justify-center
                    border border-white/10
                    bg-white/5
                    group-hover:border-emerald/30
                    transition
                  "
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="mt-3 text-electric text-sm font-semibold">
                  {skill.name}
                </p>

                <p className="mt-1 text-[12px] text-electric/60">
                  {skill.level || "Proficiency"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
