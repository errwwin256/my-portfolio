import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./layout/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/animations.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-white via-purple-50 to-lavender">
      <Navbar open={open} setOpen={setOpen} />

      <Home />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}
