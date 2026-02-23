import { useRef, useState } from "react";
import { sendEmailForm } from "../utils/sendEmail";

export default function Footer() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    sendEmailForm(
      form,
      () => {
        alert("✅ Message sent successfully!");
        form.current?.reset();
        setSending(false);
      },
      (err) => {
        alert("❌ Failed to send message. Please try again later.");
        console.error(err);
        setSending(false);
      },
    );
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-28 w-full mt-auto border-t border-borderGlass"
    >
      {/* Big branding background */}
      <div className="relative overflow-hidden">
        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        {/* Main container */}
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header strip (big branding) */}
          <div
            className="
              rounded-[28px]
              border border-borderGlass
              bg-glass
              backdrop-blur-xl
              shadow-glass
              p-6 sm:p-10
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              {/* Brand column */}
              <div className="w-full lg:w-[38%]">
                <div className="flex items-center gap-4">
                  <img
                    src={`${import.meta.env.BASE_URL}Logo.png`}
                    alt="Erwin Logo"
                    className="w-14 h-14 rounded-2xl object-cover ring-1 ring-white/15"
                  />
                  <div>
                    <p className="text-electric/70 text-sm">Web Developer</p>
                    <h3 className="text-electric text-2xl sm:text-3xl font-extrabold tracking-tight">
                      Erwin Galura
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-electric/75 leading-relaxed">
                  I build modern, fast, and user-friendly websites with clean
                  code and strong UI/UX. Let’s create something that feels
                  premium and performs.
                </p>

                {/* Quick CTA row */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:erwingalura25@gmail.com"
                    className="
                      inline-flex items-center justify-center
                      px-4 py-2 rounded-xl
                      border border-borderGlass
                      bg-white/5 hover:bg-white/10
                      text-electric font-semibold
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/60
                    "
                  >
                    Email Me
                  </a>

                  <a
                    href="#projects"
                    className="
                      inline-flex items-center justify-center
                      px-4 py-2 rounded-xl
                      bg-emerald text-midnight
                      font-extrabold
                      shadow-emeraldGlow
                      hover:brightness-110
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldSoft
                    "
                  >
                    View Projects
                  </a>
                </div>

                {/* Contact details */}
                <div className="mt-7 space-y-3 text-sm text-electric/80">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-white/5 border border-borderGlass">
                      <i className="fas fa-phone text-emerald"></i>
                    </span>
                    <span className="font-semibold">+63 975 744 9954</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-white/5 border border-borderGlass">
                      <i className="fas fa-envelope text-emerald"></i>
                    </span>
                    <a
                      href="mailto:erwingalura25@gmail.com"
                      className="font-semibold hover:underline"
                    >
                      erwingalura25@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-white/5 border border-borderGlass">
                      <i className="fas fa-map-marker-alt text-emerald"></i>
                    </span>
                    <span className="font-semibold">
                      Angeles City, Philippines
                    </span>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-electric/55">
                    Social
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    {[
                      {
                        href: "https://www.facebook.com/errwwin25/",
                        icon: "facebook",
                        label: "Facebook",
                      },
                      {
                        href: "https://ph.linkedin.com/in/errwwin25",
                        icon: "linkedin",
                        label: "LinkedIn",
                      },
                      {
                        href: "https://www.instagram.com/errwwin25/",
                        icon: "instagram",
                        label: "Instagram",
                      },
                    ].map((soc) => (
                      <a
                        key={soc.icon}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={soc.label}
                        className="
                          inline-flex items-center justify-center
                          w-11 h-11 rounded-xl
                          border border-borderGlass
                          bg-white/5 hover:bg-white/10
                          text-electric
                          transition
                          hover:-translate-y-0.5
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/60
                        "
                      >
                        <i className={`fab fa-${soc.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact form column */}
              <div className="w-full lg:flex-1">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-electric/55">
                      Contact
                    </p>
                    <h4 className="mt-2 text-electric text-2xl sm:text-3xl font-extrabold">
                      Let’s build something great.
                    </h4>
                    <p className="mt-2 text-electric/70">
                      Send a message and I’ll reply as soon as I can.
                    </p>
                  </div>
                </div>

                <form
                  ref={form}
                  onSubmit={onSubmit}
                  className="
                    mt-6
                    rounded-2xl
                    border border-borderGlass
                    bg-white/5
                    backdrop-blur-xl
                    p-5 sm:p-6
                    shadow-[0_18px_55px_rgba(0,0,0,0.35)]
                    space-y-3
                  "
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your name"
                      className="
                        w-full p-3 rounded-xl
                        border border-borderGlass
                        bg-transparent
                        text-electric placeholder:text-electric/45
                        focus:outline-none focus:ring-2 focus:ring-emerald/50
                      "
                      required
                    />

                    <input
                      type="email"
                      name="from_email"
                      placeholder="Your email"
                      className="
                        w-full p-3 rounded-xl
                        border border-borderGlass
                        bg-transparent
                        text-electric placeholder:text-electric/45
                        focus:outline-none focus:ring-2 focus:ring-emerald/50
                      "
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell me about your project…"
                    rows="5"
                    className="
                      w-full p-3 rounded-xl
                      border border-borderGlass
                      bg-transparent
                      text-electric placeholder:text-electric/45
                      focus:outline-none focus:ring-2 focus:ring-emerald/50
                      resize-none
                    "
                    required
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className={[
                      "w-full px-4 py-3 rounded-xl font-extrabold transition",
                      "bg-emerald text-midnight shadow-emeraldGlow",
                      "hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldSoft",
                      sending ? "opacity-70 cursor-not-allowed" : "",
                    ].join(" ")}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-electric/50">
                    Tip: You can also email directly at{" "}
                    <a
                      className="underline"
                      href="mailto:erwingalura25@gmail.com"
                    >
                      erwingalura25@gmail.com
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-electric/55">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-electric font-semibold">Erwin Galura</span>.
              All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald shadow-emeraldGlow" />
              <span>Built with React + Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
