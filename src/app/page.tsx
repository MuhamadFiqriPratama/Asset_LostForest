import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GameAssets from "@/components/GameAssets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <GameAssets />
      <Contact />
      <Footer />
    </main>
  );
}