import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import StackdSection from "./components/StackdSection";
import Services from "./components/Services";
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
      <Work />
      <Testimonials />
      <StackdSection />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
