import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
