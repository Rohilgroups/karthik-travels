import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import ServicesPreview from '../../components/ServicesPreview';
import BookingStrip from '../../components/BookingStrip';
import AboutPreview from '../../components/AboutPreview';
import ContactPreview from '../../components/ContactPreview';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import About from '../../components/About'
import TravelSolutions from '../../components/TravelSolutions';
import VanLottie from '../../components/VanLottie';
import Destination from '../../pages/Services/components/ServicesDestinations'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sivakasi Travels | Karthik Travels | Car Rental & Tempo Traveller in Sivakasi</title>
        <meta name="description" content="Book the best car rental in Sivakasi with affordable pricing. Tempo traveller, taxi service, outstation cab & airport pickup available 24/7" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="relative h-40 -mb-16 z-20 overflow-hidden pointer-events-none translate-y-2">
          <div className="absolute w-full h-full flex justify-center animate-drive-right">
            <VanLottie className="h-full w-auto" />
          </div>
        </div>
        <TrustBar />
        <Destination />
        <TravelSolutions />
        <ServicesPreview />
        <BookingStrip />
        <AboutPreview />
        <ContactPreview />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
