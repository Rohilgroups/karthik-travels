import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, MapPin, Shield, Star } from 'lucide-react';
import HeroVideo from '../assets/HeroVideo.mp4'

export default function Hero() {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <video
        autoPlay={true}
        loop
        muted={true}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
    
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-64 pb-24 md:pb-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center gap-2 bg-brand-700/60 border border-brand-500/50 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            Serving Sivakasi &amp; Beyond
          </div>

          <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Your Trusted{' '}
            <span className="text-gradient-yellow">Travel Partner</span>
            <br />in Sivakasi
          </h1>

          <p className="reveal text-brand-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Experience safe, comfortable, and affordable journeys with Karthik Travels.
            From local trips to outstation adventures — we've got you covered.
          </p>

          <div className="reveal flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Shield, text: '100% Safe Rides' },
              { icon: Star, text: 'Trusted by 1000+' },
              { icon: MapPin, text: 'All Tamil Nadu' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white">
                <Icon className="w-4 h-4 text-accent-400" />
                {text}
              </div>
            ))}
          </div>

          <div className="reveal flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/booking')} className="btn-primary text-base">
              🚌 Book Now
            </button>
            <a href="tel:+918110941314" className="flex items-center gap-2 bg-white text-brand-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 text-base">
              📞 Call Now
            </a>
            <button onClick={() => navigate('/services')} className="btn-outline text-base">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce-slow z-10">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
