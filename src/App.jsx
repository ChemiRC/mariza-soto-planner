import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Featured from './components/Featured/Featured';
import Services from './components/Services/Services';
import Categories from './components/Gallery/Categories';
import Testimonials from './components/Testimonials/Testimonials';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import useRevealOnScroll from './hooks/useRevealOnScroll';

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <a href="#contenido-principal" className="visually-hidden" style={{ position: 'absolute' }}>
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <About />
        <Featured />
        <Categories />
        <Services />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
