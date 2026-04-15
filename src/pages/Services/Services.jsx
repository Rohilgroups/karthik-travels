import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import ServicesDetailed from './components/ServicesDetailed';
import ServicesDestinations from './components/ServicesDestinations';
import ServicesFleet from './components/ServicesFleet';
import ServicesCTA from './components/ServicesCTA';

export default function Services() {
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
        <title>Our Services | Car Rental, Tempo Traveller & Taxi in Sivakasi</title>
        <meta name="description" content="Explore our wide range of travel services including outstation cabs, airport pickups, tempo traveller rentals, and local taxi services in Sivakasi." />
      </Helmet>
      <Navbar />
      <main ref={sectionRef}>
        <ServicesHero />
        <ServicesDetailed />
        <ServicesFleet />
        <ServicesDestinations />
        <ServicesList />
        <ServicesCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
