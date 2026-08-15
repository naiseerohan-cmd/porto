import StatusBar from "@/components/StatusBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <StatusBar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
