import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Ticker from "./components/ticker";
import About from "./components/about";
import Services from "./components/services";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-[#0d1220] text-white overflow-x-hidden">
      <Navbar />
      <section id="home"><Hero /></section>
      <Ticker />
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="stats"><Stats /></section>
      <section id="testimonials"><Testimonials /></section>
      <CTA />
      <section id="contact"><Footer /></section>
    </main>
  );
}
