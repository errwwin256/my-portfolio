import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-24 px-6 md:px-12 text-center border-t border-white/10"
      style={{
        background:
          "radial-gradient(circle at 18% 18%, rgba(16,185,129,0.14), rgba(6,24,38,0) 45%), radial-gradient(circle at 82% 65%, rgba(248,250,252,0.08), rgba(6,24,38,0) 52%), #061826",
      }}
    >
      {/* Emerald glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-emerald/20 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-borderGlass bg-glass text-electric/70 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_18px_rgba(16,185,129,0.55)]" />
          Selected Work
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-electric">
          Projects{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emeraldSoft to-electric">
            I’ve built
          </span>
        </h2>

        <p className="mt-4 text-electric/70 max-w-2xl mx-auto leading-relaxed">
          A mix of real client work, product-style UIs, and experiments—built
          for performance, responsiveness, and clean UX.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 mx-auto max-w-6xl mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((p, i) => (
          <article
            key={i}
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-borderGlass
              bg-glass backdrop-blur-xl
              shadow-[0_18px_55px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-emerald/35
              hover:shadow-[0_0_34px_rgba(16,185,129,0.22),0_18px_60px_rgba(0,0,0,0.45)]
            "
          >
            {/* Top highlight stroke */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.16), rgba(248,250,252,0.06))",
              }}
            />

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Image overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/20 to-transparent" />

              {/* Small tag */}
              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-midnight/40 backdrop-blur text-electric/80">
                  <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_12px_rgba(16,185,129,0.55)]" />
                  Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 text-left">
              <h3 className="text-lg font-extrabold text-electric leading-snug">
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-electric/70 leading-relaxed">
                {p.desc}
              </p>

              {/* CTA row */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    px-4 py-2.5 rounded-2xl
                    text-sm font-semibold
                    text-midnight
                    bg-emerald hover:bg-emeraldSoft
                    shadow-[0_10px_28px_rgba(16,185,129,0.22)]
                    transition-all duration-300
                    hover:shadow-[0_0_26px_rgba(16,185,129,0.35)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldSoft
                  "
                >
                  View Project
                  <span className="ml-2">↗</span>
                </a>

                {/* Light skeuo micro button */}
                <span
                  className="
                    inline-flex items-center
                    px-3 py-2 rounded-2xl
                    text-xs font-semibold
                    text-electric/70
                    border border-white/10
                    bg-white/5
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]
                  "
                  title="Built with modern UI"
                >
                  Glass Inspired
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
