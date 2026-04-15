import { useEffect, useRef } from 'react';
import { Bus, Car, Globe, MapPin, Package, Compass } from 'lucide-react';

const services = [
  {
    icon: Bus,
    title: 'Bus Booking',
    desc: 'Comfortable AC and non-AC buses for group travel, events, and pilgrimages.',
    color: 'from-brand-700 to-brand-600',
  },
  {
    icon: Car,
    title: 'Car Rental',
    desc: 'Sedan, SUV, and tempo travellers available for hourly, daily, or outstation hire.',
    color: 'from-brand-800 to-brand-700',
  },
  {
    icon: Globe,
    title: 'Tour Packages',
    desc: 'Curated tour packages across Tamil Nadu — hill stations, temples, and beaches.',
    color: 'from-brand-600 to-brand-500',
  },
  {
    icon: MapPin,
    title: 'Local Trips',
    desc: 'Affordable local travel within Sivakasi for shopping, events, and daily needs.',
    color: 'from-brand-700 to-brand-600',
  },
  {
    icon: Compass,
    title: 'Outstation Trips',
    desc: 'One-way and round-trip outstation rides across Tamil Nadu and neighboring states.',
    color: 'from-brand-800 to-brand-700',
  },
  {
    icon: Package,
    title: 'Corporate Travel',
    desc: 'Reliable employee transportation and corporate event travel solutions.',
    color: 'from-brand-600 to-brand-500',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bus className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="reveal section-heading mb-4">
            Our <span>Services</span>
          </h2>
          <p className="reveal text-gray-500 text-lg">
            From local trips to long-distance travel, we provide a wide range of transportation solutions tailored to your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="reveal card group overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${color} p-6 relative overflow-hidden`}>
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute -right-2 bottom-0 w-14 h-14 bg-white/5 rounded-full" />
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-800 mb-2 group-hover:text-brand-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
