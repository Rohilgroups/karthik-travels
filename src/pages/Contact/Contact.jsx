import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import ContactImg from '../../assets/temple.jpg';

export default function Contact() {
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
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactItems = [
    { icon: Phone, label: 'Call Us', value: '+91 81109 41314', sub: 'Alt: +91 70101 88402', href: 'tel:+918110941314', color: 'bg-brand-700' },
    { icon: MapPin, label: 'Our Location', value: 'Sivakasi, Tamil Nadu', sub: 'Virudhunagar District, TN – 626123', href: 'https://share.google/Hgkwf9mjs9mmgdZwF', color: 'bg-brand-800' },
    { icon: Clock, label: 'Working Hours', value: '24/7', sub: 'Monday to Sunday, All Days', href: null, color: 'bg-brand-600' },
    { icon: Mail, label: 'Email Us', value: 'karthiktravels699@gmail.com', sub: 'Insta: @Karthik_travels_95', href: 'mailto:karthiktravels699@gmail.com', color: 'bg-brand-700' },
  ];

  return (
    <>
      <Helmet>
        <title>Car Rental Near Me in Sivakasi | Taxi & Tempo Traveller</title>
        <meta name="description" content="Looking for car rental near you in Sivakasi? We offer taxi, tempo traveller, and outstation cab services across Tamil Nadu." />
      </Helmet>
      <Navbar />
      <div 
        className="min-h-[70vh] flex items-center pt-24 pb-12 bg-hero-gradient text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-950/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">Contact <span className="text-gradient-yellow">Us</span></h1>
          <p className="text-brand-200 text-lg">We're just a call or message away</p>
        </div>
      </div>

      <section ref={sectionRef} className="py-20 bg-gradient-to-b from-brand-50 to-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, sub, href, color }) => (
                <div key={label} className="reveal card p-5 flex items-center gap-5 border border-brand-100 group">
                  <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-brand-500 font-semibold uppercase tracking-wide mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-800 hover:text-brand-600 transition-colors block uppercase tracking-tight">{value}</a>
                    ) : (
                      <div className="font-bold text-brand-800 uppercase tracking-tight">{value}</div>
                    )}
                    <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal">
              <div className="card overflow-hidden border border-brand-100 shadow-xl">
                <div className="relative h-[350px] bg-brand-800 flex items-center justify-center overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.901169911961!2d77.79781427479897!3d9.430068090648149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf2e0e0c1eeb%3A0xb13373e1b0d32783!2sKarthik%20Travels!5e0!3m2!1sen!2sin!4v1774524870524!5m2!1sen!2sin" 
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karthik Travels Location"
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <a href="https://share.google/Hgkwf9mjs9mmgdZwF" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block text-sm uppercase tracking-widest font-black transition-all hover:scale-[1.02]">
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-900 mb-6 tracking-tight">Car Rental Near Me – <span className="text-brand-600">Sivakasi & Nearby Areas</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Providing the most reliable travel solutions across the region.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="reveal bg-brand-50 p-10 rounded-[40px] border border-brand-100 shadow-sm transition-all hover:shadow-xl group">
              <h3 className="text-2xl font-black text-brand-900 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent-400 rounded-full group-hover:scale-y-125 transition-transform" />
                If you are searching for:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Car rental near me', 'Taxi service near me', 'Tempo traveller near me'].map(item => (
                  <li key={item} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-brand-100 shadow-sm font-bold text-brand-800 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal bg-brand-900 p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="text-2xl font-black text-accent-400 mb-8 flex items-center gap-3 relative z-10">
                <div className="w-2 h-8 bg-white rounded-full group-hover:scale-y-125 transition-transform" />
                We provide services in: Primary Locations
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {[
                  'Sivakasi car rental',
                  'Virudhunagar taxi service',
                  'Srivilliputhur car rental',
                  'Madurai cab service',
                  'Tuticorin taxi booking'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors font-bold text-brand-100 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
