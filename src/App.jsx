import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function App() {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8azhc1r", // 🔹 replace this
        "template_rrxn6k5", // 🔹 replace this
        form.current,
        "gyCopgvHSFxdcNkcy" // 🔹 replace this
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-white via-purple-50 to-lavender">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-[60] bg-gradient-to-r from-lavender/90 to-ube/90 backdrop-blur-md text-white shadow-lg border-b border-white/20">
        <div className="w-full px-6 md:px-12 py-3 flex justify-between items-center">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-20 h-20 sm:w-20 sm:h-20 rounded-full object-cover"
            />
          </div>

          {/* Desktop Nav with Sparkle Hover */}
          <ul className="hidden md:flex space-x-2 text-lg font-semibold relative">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-2 py-1 relative z-10 transition-all duration-300 hover:text-white"
                >
                  {item}
                </a>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <span className="absolute w-2 h-2 bg-purple-600 rounded-full top-0 left-1/2 animate-sparkle"></span>
                  <span className="absolute w-2 h-2 bg-purple-700 rounded-full bottom-0 left-1/4 animate-sparkle delay-100"></span>
                  <span className="absolute w-2 h-2 bg-purple-800 rounded-full top-1/2 right-1/4 animate-sparkle delay-200"></span>
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl focus:outline-none transition-transform duration-200"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-gradient-to-b from-lavender/95 to-ube/95 
              backdrop-blur-md border-t border-white/20 shadow-lg flex flex-col text-center text-lg font-semibold"
            >
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="py-3 w-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="relative w-full min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-center 
       gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-24 text-white/90 text-center lg:text-left overflow-hidden"
      >
        {/* 🌌 Animated Aurora Background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#8b5cf6,_#6d28d9,_#a855f7,_#9333ea)] 
    animate-ube-waves animate-ube-glow blur-2xl opacity-60"
        ></div>

        {/* 💭 Floating Glowing Bubbles */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {Array.from({ length: 45 }).map((_, i) => {
            const size = Math.random() * 90 + 20; // 20–110px for size variety
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 10 + Math.random() * 20;
            const hue = Math.random() * 50 + 210; // cool blue-purple tones
            const opacity = (Math.random() * 0.4 + 0.5).toFixed(2); // 0.5–0.9
            const blur = Math.random() < 0.5 ? 2 : 6; // some closer, some farther

            return (
              <div
                key={i}
                className="absolute rounded-full animate-bubble-float"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  bottom: `-${size}px`,
                  background: `radial-gradient(circle at 30% 30%, hsla(${hue}, 100%, 85%, ${opacity}), hsla(${hue}, 100%, 60%, 0.2))`,
                  filter: `blur(${blur}px)`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              ></div>
            );
          })}
        </div>

        {/* 🌫️ Glass Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.4)]"></div>

        {/* ✨ Text Content */}
        <div
          className="relative z-10 flex-1 flex flex-col items-center lg:items-start w-full
               max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] leading-snug">
            Hi, I'm <span className="text-blue-500">Erwin Galura</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
            A passionate Web Developer crafting modern, user-friendly websites
            using{" "}
            <span className="font-semibold text-yellow-400">React.js</span>,{" "}
            <span className="font-semibold text-yellow-400">JavaScript</span>,
            and{" "}
            <span className="font-semibold text-yellow-400">Tailwind CSS</span>.
          </p>

          <a
            href="#projects"
            className="mt-6 sm:mt-8 inline-block bg-white/20 backdrop-blur-md text-white font-semibold px-6 sm:px-8 py-3 rounded-full 
                 shadow-lg border border-white/30 hover:bg-white/30 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            View My Work
          </a>
        </div>

        {/* 🪩 Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex-1 flex justify-center items-center w-full mt-6 sm:mt-0"
        >
          <div
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]
                 flex items-center justify-center mx-auto"
          >
            {/* 🧊 Rotating Rings */}
            <div
              className="absolute inset-0 rounded-full border-[5px] sm:border-[8px] animate-rotate-slow opacity-90"
              style={{
                borderColor: "transparent",
                background:
                  "conic-gradient(from 0deg, #c084fc, #a855f7, #7e22ce, #c084fc)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
              }}
            ></div>

            <div
              className="absolute inset-4 rounded-full border-[5px] sm:border-[8px] animate-rotate-medium opacity-80"
              style={{
                borderColor: "transparent",
                background:
                  "conic-gradient(from 90deg, #ddd6fe, #c084fc, #8b5cf6, #ddd6fe)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
              }}
            ></div>

            <div
              className="absolute inset-8 rounded-full border-[5px] sm:border-[8px] animate-rotate-fast opacity-70"
              style={{
                borderColor: "transparent",
                background:
                  "conic-gradient(from 180deg, #a78bfa, #7c3aed, #6d28d9, #a78bfa)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
              }}
            ></div>

            <div
              className="absolute inset-10 rounded-full border-[5px] sm:border-[8px] animate-rotate-slower opacity-60"
              style={{
                borderColor: "transparent",
                background:
                  "conic-gradient(from 270deg, #f5d0fe, #c084fc, #a855f7, #f5d0fe)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
              }}
            ></div>

            <div className="w-[90%] h-[90%] rounded-full bg-white/20 backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl border border-white/30">
              <img
                src="/erwin.png"
                alt="Erwin"
                className="w-full h-full rounded-full object-cover border-4 border-white/40 shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 💡 Skills Section */}
      <section
        id="skills"
        className="relative w-full py-24 px-6 md:px-12 overflow-hidden 
       bg-gradient-to-br from-violet-900 via-purple-700 to-indigo-900 
       text-white border-t border-white/10"
      >
        {/* 🫐 Ube & Blueberry background accents */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

        <h2 className="relative text-4xl font-extrabold text-center mb-12 drop-shadow-lg">
          My Skills
        </h2>

        {/* 🌈 Infinite Scrolling Row */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-fast gap-12 whitespace-nowrap">
            {[
              {
                name: "HTML",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
              },
              {
                name: "JavaScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "Tailwind CSS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              },
              {
                name: "ReactJS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Java",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "C#",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
              },
              {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              {
                name: "PHP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
              {
                name: "WordPress",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
              },
              {
                name: "Firebase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              },
              {
                name: "Supabase",
                logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/supabase.svg",
              },
              {
                name: "Responsive Design",
                logo: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
              },
              {
                name: "Testing & Debugging",
                logo: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png",
              },
              {
                name: "SEO",
                logo: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
              },
              {
                name: "UI/UX Design",
                logo: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[140px] 
                     bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 
                     shadow-md transition-all duration-300 
                     hover:bg-white/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3 drop-shadow-md"
                />
                <p className="text-white text-sm font-semibold">{skill.name}</p>
              </div>
            ))}

            {/* Duplicate for infinite loop */}
            {[
              {
                name: "HTML",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
              },
              {
                name: "JavaScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "Tailwind CSS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              },
              {
                name: "ReactJS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Java",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "C#",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
              },
              {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              {
                name: "PHP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
              {
                name: "WordPress",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
              },
              {
                name: "Firebase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              },
              {
                name: "Supabase",
                logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/supabase.svg",
              },
              {
                name: "Responsive Design",
                logo: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
              },
              {
                name: "Testing & Debugging",
                logo: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png",
              },
              {
                name: "SEO",
                logo: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
              },
              {
                name: "UI/UX Design",
                logo: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",
              },
            ].map((skill, i) => (
              <div
                key={`dup-${i}`}
                className="flex flex-col items-center justify-center min-w-[140px] 
                     bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 
                     shadow-md transition-all duration-300 
                     hover:bg-white/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3 drop-shadow-md"
                />
                <p className="text-white text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 Projects Section */}
      <section
        id="projects"
        className="relative w-full py-24 px-6 md:px-12 text-center 
       bg-gradient-to-br from-violet-950 via-purple-700 to-violet-300 
       overflow-hidden"
      >
        <h2 className="relative text-4xl font-extrabold text-violet-800 mb-14 drop-shadow-sm z-10">
          Projects
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
          {[
            {
              title: "Maharlika Shipping Lines Website",
              img: "/projects/web1.JPG",
              desc: "Shipping lines website where users can book a RoRo ride.",
              link: "https://errwwin256.github.io/maharlika-shipping/",
            },
            {
              title: "Property Website",
              img: "/projects/web2.JPG",
              desc: "Property website displaying various houses.",
              link: "https://errwwin256.github.io/property-website/",
            },
            {
              title: "Expense Tracker",
              img: "/projects/web3.JPG",
              desc: "Track your expenses and income with ease.",
              link: "https://errwwin256.github.io/expense-tracker/",
            },
            {
              title: "Online Shop Store",
              img: "/projects/web4.JPG",
              desc: "E-commerce store allowing users to add, edit, and delete items.",
              link: "https://errwwin256.github.io/ecommerce-store/",
            },
            {
              title: "Elemental Weather, To-Do & Calculator App",
              img: "/projects/web5.JPG",
              desc: "Combined weather app, to-do list, and calculator with APIs.",
              link: "https://errwwin256.github.io/landing-elemental/",
            },
            {
              title: "Chat App",
              img: "/projects/web6.JPG",
              desc: "A real-time chat app with a Sanrio theme.",
              link: "https://errwwin256.github.io/client/",
            },
            {
              title: "Animal Blog",
              img: "/projects/web7.JPG",
              desc: "A blog where users can post, edit, and delete animal articles.",
              link: "https://errwwin256.github.io/animal-blog/#/",
            },
            {
              title: "Recipe Finder",
              img: "/projects/web8.JPG",
              desc: "A recipe finder app powered by an API.",
              link: "https://errwwin256.github.io/recipe-finder/",
            },
            {
              title: "School Website",
              img: "/projects/web9.JPG",
              desc: "A school website showcasing facilities and environment.",
              link: "https://errwwin256.github.io/school-website/",
            },
            {
              title: "Travel Website",
              img: "/projects/web10.JPG",
              desc: "A travel blog for sharing personal travel diaries.",
              link: "https://errwwin256.github.io/my-travels/",
            },
            {
              title: "Real Estate Homepage",
              img: "/projects/web11.JPG",
              desc: "A real estate home page.",
              link: "https://errwwin256.github.io/real-estate-homepage/",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl 
                   overflow-hidden border border-violet-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-violet-800">
                  {p.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-5 py-2 bg-violet-600 text-blue-600 text-sm font-semibold 
                       rounded-full shadow hover:bg-violet-700 hover:shadow-md transition-all"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-lavender to-ube text-white border-t border-white/20 mt-auto">
        <div className="w-full py-20 px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8 items-start justify-between">
            {/* Column 1 - Logo */}
            <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left mx-auto">
              <img
                src="/Logo.png"
                alt="Erwin Logo"
                className="w-30 h-30 rounded-full object-cover border-2 border-white/40 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              />
              <p className="text-white/80 text-sm max-w-xs">
                Creating modern web experiences with clean code and thoughtful
                design.
              </p>
            </div>

            {/* Column 2 - About */}
            <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left mx-auto">
              <h3 className="text-lg font-semibold text-yellow-400 tracking-wide border-b border-white/20 pb-2 w-fit">
                About
              </h3>
              <p className="text-white/85 leading-relaxed max-w-xs">
                Web Developer and Designer crafting modern, user-focused digital
                experiences. Specialized in{" "}
                <span className="font-medium text-sky-300">React.js</span>,{" "}
                <span className="font-medium text-sky-300">Tailwind CSS</span>,
                and <span className="font-medium text-sky-300">JavaScript</span>
                .
              </p>
            </div>

            {/* Column 3 - Get in Touch */}
            <div className="flex flex-col items-center lg:items-start space-y-3 text-base text-sky-400 text-center lg:text-left mx-auto">
              <h3 className="text-lg font-semibold text-yellow-400 tracking-wide border-b border-white/20 pb-2 w-fit">
                Get in Touch
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <i className="fas fa-phone text-sky-300"></i>
                <span className="hover:text-white transition duration-300">
                  +63 975 744 9954
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <i className="fas fa-envelope text-sky-300"></i>
                <a
                  href="mailto:erwingalura25@gmail.com"
                  className="hover:text-white hover:underline transition duration-300"
                >
                  erwingalura25@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <i className="fas fa-map-marker-alt text-sky-300"></i>
                <span className="text-white/85">Angeles City, Philippines</span>
              </div>
            </div>

            {/* Column 4 - Social Media */}
            <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left mx-auto">
              <h3 className="text-lg font-semibold text-yellow-400 tracking-wide border-b border-white/20 pb-2 w-fit">
                Social Media
              </h3>
              <div className="flex justify-center lg:justify-start gap-6 text-2xl">
                {[
                  {
                    href: "https://www.facebook.com/errwwin25/",
                    icon: "facebook",
                    color: "hover:text-[#1877F2]",
                  },
                  {
                    href: "https://ph.linkedin.com/in/errwwin25",
                    icon: "linkedin",
                    color: "hover:text-[#0A66C2]",
                  },
                  {
                    href: "https://www.instagram.com/errwwin25/",
                    icon: "instagram",
                    color: "hover:text-[#E4405F]",
                  },
                ].map((soc) => (
                  <a
                    key={soc.icon}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.icon}
                    className={`transition-transform transform hover:scale-110 ${soc.color}`}
                  >
                    <i className={`fab fa-${soc.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 5 - Contact Form */}
            <div
              id="contact"
              className="flex flex-col space-y-4 mx-auto w-full max-w-sm"
            >
              <h3 className="text-lg font-semibold text-yellow-400 tracking-wide border-b border-white/20 pb-2 w-fit mx-auto lg:mx-0">
                Contact Me
              </h3>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white/10 p-4 rounded-xl backdrop-blur-md space-y-3 shadow-md"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-lg border border-white/30 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-yellow-300"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded-lg border border-white/30 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-yellow-300"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  className="w-full p-2 rounded-lg border border-white/30 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-yellow-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-300 text-gray-900 py-2 rounded-lg hover:from-yellow-300 hover:to-yellow-200 transition font-semibold"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-black/20 border-t border-white/10 py-3 text-center text-sm text-white/70 w-full">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Erwin Galura</span>. All
          Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
