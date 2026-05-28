import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Featured from './components/Featured/Featured';
import Categories from './components/Gallery/Categories';
import About from './components/About/About';
import Services from './components/Services/Services';
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
        <Stats />
        <Featured />
        <Categories />
        <About />
        <Services />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
