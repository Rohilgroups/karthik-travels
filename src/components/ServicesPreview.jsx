import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, Car, Globe, Compass } from 'lucide-react';

const services = [
  { icon: Bus,     title: 'Van Booking',     desc: 'AC & non-AC Vans for groups, events & pilgrimages.',            color: 'from-brand-700 to-brand-600' },
  { icon: Car,     title: 'Car Rental',      desc: 'Sedan, SUV & tempo traveller for daily or outstation hire.',     color: 'from-brand-800 to-brand-700' },
  { icon: Globe,   title: 'Tour Packages',   desc: 'Curated trips to hill stations, temples & beaches across TN.',   color: 'from-brand-600 to-brand-500' },
  { icon: Compass, title: 'Outstation Trips', desc: 'One-way & round-trip rides across Tamil Nadu & beyond.',        color: 'from-brand-700 to-brand-600' },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal').forEach((el, i) =>
          setTimeout(() => el.classList.add('visible'), i * 100)
        );
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bus className="w-4 h-4" /> What We Offer
          </div>
          <h2 className="reveal section-heading">Our <span>Services</span></h2>
          <p className="reveal text-gray-500 mt-3 max-w-xl mx-auto">
            From city rides to long-distance adventures — we handle it all.
          </p>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="reveal card group overflow-hidden">
              <div className={`bg-gradient-to-br ${color} p-6 relative overflow-hidden`}>
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-800 mb-2 group-hover:text-brand-600 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <button
                  onClick={() => navigate('/services')}
                  className="text-accent-500 text-sm font-semibold hover:text-accent-600 transition-colors flex items-center gap-1"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <button onClick={() => navigate('/services')} className="btn-primary">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
