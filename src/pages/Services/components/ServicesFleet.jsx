import { useEffect, useRef } from 'react';
import { Car, Bus, Users, Shield, Zap, Sparkles } from 'lucide-react';

// Vehicle Images
import swiftImg from '../../../assets/swift.jpg';
import taxiImg from '../../../assets/Tavera.jpg';
import mrgCarImg from '../../../assets/ertiga2.png';
import tempoImg from '../../../assets/tempolatest.jpg';
import vanImg from '../../../assets/Mahindra.jpg';

const fleet = [
  {
    type: 'Cars (4 Seater)',
    models: 'Swift, Etios , Dzire',
    capacity: '4 + 1 Seats',
    icon: Car,
    image: swiftImg,
    features: ['AC / Non-AC', 'Clean Interiors', 'Professional Drivers'],
    color: 'bg-blue-500'
  },
  {
    type: 'Cars (8 & 9 Seater)',
    models: 'Tavera , Xylo, Innova',
    capacity: '8 & 9+1 SEATS',
    icon: Car,
    image: taxiImg,
    features: [ 'Clean Interiors', 'Expert Drivers'],
    color: 'bg-blue-900'
  },
  {
    type: 'Cars (7 Seater)',
    models: 'Ertiga',
    capacity: '7 + 1 Seats',
    icon: Zap,
    image: mrgCarImg,
    features: ['Spacious SUV', 'Perfect for Families', 'Ample Luggage Space'],
    color: 'bg-emerald-500'
  },
  {
    type: 'Tempo Traveller',
    models: 'Premium Tempo',
    capacity: '14 Seats',
    icon: Users,
    image: tempoImg,
    features: ['Pushback Seats', 'Music System', 'Ideal for Pilgrimage'],
    color: 'bg-orange-500'
  },
  {
    type: 'Vans',
    models: 'Mahindra',
    capacity: '17 & 21 Seats',
    icon: Bus,
    image: vanImg,
    features: ['Large Group Travel', 'School/Collage Trips', 'Competitive Rates'],
    color: 'bg-brand-600'
  }
];

export default function ServicesFleet() {
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-brand-50 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4" /> Our Premium Fleet
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-black text-brand-900 mb-6 uppercase italic tracking-tight">
            Choose Your <span className="text-accent-500">Perfect Ride</span>
          </h2>
          <p className="reveal text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Our travel service has different types of vehicles to suit your needs.
            Safe, clean, and comfortable journeys are guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((item, i) => (
            <div key={item.type} className="reveal group relative">
              <div className="h-full bg-white rounded-[2.5rem] p-1 shadow-xl transition-all duration-500 hover:-translate-y-2 group-hover:shadow-glow-yellow/20 overflow-hidden relative">
                {/* Full Background Image (Revealed on Hover) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <img 
                    src={item.image} 
                    alt={item.type}
                    className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/30 to-brand-600/30" />
                </div>

                <div className="h-full bg-white group-hover:bg-transparent rounded-[2.3rem] p-8 border border-brand-100 group-hover:border-transparent flex flex-col relative z-10 transition-colors duration-500">
                  {/* Icon Header */}
                  <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-6">
                    <div className="text-brand-600 group-hover:text-accent-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 transition-colors duration-500">{item.capacity}</div>
                    <h3 className="text-2xl font-black text-brand-900 group-hover:text-white uppercase tracking-tight mb-1 leading-tight transition-colors duration-500">{item.type}</h3>
                    <div className="text-gray-500 group-hover:text-brand-100 font-medium text-sm italic transition-colors duration-500">{item.models}</div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {item.features.map(feat => (
                      <li key={feat} className="flex items-center gap-3 text-gray-600 group-hover:text-white text-sm font-semibold transition-colors duration-500">
                        <div className="bg-green-100 group-hover:bg-white/20 p-1 rounded-full transition-colors duration-500">
                           <Shield className="w-3 h-3 text-green-600 group-hover:text-accent-400" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="tel:+918110941314"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 group-hover:bg-white group-hover:text-brand-900 hover:!bg-accent-400 text-white font-black py-4 rounded-2xl transition-all duration-300 text-xs uppercase tracking-widest"
                  >
                    Book This Ride
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
