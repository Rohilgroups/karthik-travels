import { useEffect, useRef } from 'react';
import { Award, Heart, MapPin, Users } from 'lucide-react';
import TravelLottie from './TravelLottie';

const highlights = [
  {
    icon: Award,
    title: 'Years of Experience',
    desc: 'Serving travelers across Sivakasi and Tamil Nadu with dedication and professionalism.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'All our vehicles are well-maintained and driven by licensed, experienced drivers.',
  },
  {
    icon: Heart,
    title: 'Trusted Service',
    desc: 'Thousands of happy customers trust us for their daily commutes and special journeys.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    desc: 'Deep knowledge of Sivakasi and surrounding routes ensures the best travel experience.',
  },
];

// Shield component since we need it
function Shield({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              About Us
            </div>
            <h2 className="reveal section-heading mb-6">
              Sivakasi's Most <span>Reliable</span> Travel Company
            </h2>
            <p className="reveal text-gray-600 text-lg leading-relaxed mb-4">
              <strong className="text-brand-700">Karthick Travels</strong> has been the go-to travel partner for the people of Sivakasi
              and surrounding areas. We believe every journey should be safe, comfortable, and memorable.
            </p>
            <p className="reveal text-gray-600 leading-relaxed mb-8">
              Whether you're planning a family trip, a corporate event, or a pilgrimage — our fleet of
              modern vehicles, courteous staff, and unbeatable fares make us the top choice for travelers
              across Tamil Nadu.
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-6 p-6 bg-brand-800 rounded-2xl text-white">
              {[
                { num: '500+', label: 'Happy Clients' },
                { num: '7+', label: 'Years Experience' },
                { num: '50+', label: 'Routes Covered' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-accent-400">{num}</div>
                  <div className="text-xs text-brand-200 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="reveal mb-6 flex justify-center">
              <TravelLottie className="h-[120px] md:h-[150px]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal card p-6 border border-brand-100 ${i % 2 === 1 ? 'sm:mt-6' : ''}`}
              >
                <div className="bg-brand-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="font-bold text-brand-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
