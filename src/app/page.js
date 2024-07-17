import Image from "next/image";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
   <div className="w-screen bg-[#0F103F] text-white max-md:overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
   </div>
  );
}
