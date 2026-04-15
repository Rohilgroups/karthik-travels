import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { Camera, ZoomIn, MapPin } from 'lucide-react';
import ga1 from '../../assets/Gallery/img1.jpg';
import ga2 from '../../assets/Gallery/img2.jpg';
import ga3 from '../../assets/Gallery/img3.jpg';
import ga4 from '../../assets/Gallery/img4.jpg';
import ga5 from '../../assets/Gallery/img5.jpg';
import ga6 from '../../assets/Gallery/img6.jpg';
import ga7 from '../../assets/Gallery/img7.jpg';
import ga8 from '../../assets/Gallery/img8.jpeg';
import ga9 from '../../assets/Gallery/img9.jpeg';
import ga10 from '../../assets/Gallery/img10.jpeg';
import ga11 from '../../assets/Gallery/img11.jpeg';
import ga12 from '../../assets/Gallery/img12.jpeg';
import Madurai from '../../assets/Destination/madurai.jpg';
import Rameswaram from '../../assets/Destination/Rameshwaram.jpg';
import Pondicherry from '../../assets/Destination/Pondicherry.jpg';
import Ooty from '../../assets/Destination/Ooty.jpg';




// Using a mix of local assets and high-quality travel images
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.avif';
import Img3 from '../../assets/img3.webp';
import Img4 from '../../assets/img4.webp';
import GalleryHero from '../../assets/sea.jpg';

const galleryImages = [
  { src: ga10, title: 'Our Premium Fleet' },
  { src: ga1, title: 'Luxury Bus Interior' },
  { src: ga2, title: 'Kanyakumari Trip' },
  { src: Img2, title: 'Route Excellence' },
  { src: ga3, title: 'Mountain Drive' },
  { src: ga4, title: 'Airport Pickup' },
  { src: Img3, title: 'Munnar' },
  { src: ga5, title: 'Munnar Hills' },
  { src: ga6, title: 'Group Packages' },
  { src: Img4, title: 'Safety First' },
  { src: ga7, title: 'Mahindra' },
  { src: ga8, title: 'Travel Experience' },
  { src: ga9, title: 'Service Gallery' },
  { src: ga11, title: 'Comfort Journey' },
  { src: ga12, title: 'Destination Reach' },
  { src: Madurai, title: 'Madurai Temple' },
  { src: Rameswaram, title: 'Rameswaram Bridge' },
  { src: Ooty, title: 'Ooty Tea Estates' },
  { src: Pondicherry, title: 'Pondicherry Streets' },
];

export default function Gallery() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('main > section');
    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Travel Gallery | Karthik Travels Sivakasi</title>
        <meta name="description" content="Explore our premium fleet and travel memories across South India. High-quality car rental and tempo traveller services from Sivakasi." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen">
        <section 
          className="min-h-[70vh] flex items-center pt-24 pb-12 bg-hero-gradient text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${GalleryHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-brand-950/30 z-0" />
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center w-full">
            <div className="reveal inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-accent-400 text-sm font-bold mb-8 shadow-xl">
              <Camera className="w-4 h-4 animate-pulse" />
              <span className="uppercase tracking-[0.2em]">Our Visual Narrative</span>
            </div>
            
            <h1 className="reveal text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
              Explore Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">Travel World</span>
            </h1>
            
            <p className="reveal text-brand-50 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
              A curated collection of memories, our premium fleet, and the breathtaking landscapes 
              we traverse across South India every single day.
            </p>
           
            
          </div>
        </section>

        {/* Gallery Masonry */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  className="reveal break-inside-avoid group relative overflow-hidden rounded-3xl shadow-xl bg-gray-100"
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <div className="text-accent-400 text-[10px] font-bold uppercase tracking-widest mb-1">Karthik Travels</div>
                        <h3 className="text-white font-bold text-lg">{img.title}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="reveal card p-12 bg-white border-2 border-brand-100 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -mr-16 -mt-16" />
               <h2 className="text-3xl md:text-4xl font-black text-brand-900 mb-6">Inspired by our <span className="text-brand-600">Journey?</span></h2>
               <p className="text-gray-500 mb-10 text-lg">Next trip update is yours! Book your travel now for the best experience.</p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button 
                   onClick={() => navigate('/booking')}
                   className="btn-primary w-full sm:w-auto px-10 py-4 text-lg"
                 >
                   Book My Trip Now
                 </button>
                 <a href="tel:+918110941314" className="btn-secondary w-full sm:w-auto px-10 py-4 text-lg">Call Support</a>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
