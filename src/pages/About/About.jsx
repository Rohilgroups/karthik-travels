import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import AboutDetails from './components/AboutDetails';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('main > section, main > div');
    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Sivakasi Car Rental | Best Tempo Traveller Service</title>
        <meta name="description" content="Know about our trusted car rental and tempo traveller services in Sivakasi. Affordable, safe, and reliable travel solutions." />
      </Helmet>
      <Navbar />
      <main ref={sectionRef}>
        <AboutHero />
        <AboutStory />
        <AboutDetails />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
