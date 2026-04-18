import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import StackdSection from "./components/StackdSection";
import Services from "./components/Services";
import HowIWork from "./components/HowIWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Testimonials />
      <Work />
      <StackdSection />
      <Services />
      <HowIWork />
      <Contact />
      <Footer />
    </main>
  );
}
