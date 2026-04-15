import { useEffect, useRef } from 'react';
import { Users, Briefcase, Heart, Globe, PlaneTakeoff } from 'lucide-react';

import familyTripImg from '../assets/solutions/family_trip.png';
import businessTravelImg from '../assets/solutions/business_travel.png';
import weddingImg from '../assets/solutions/wedding_transportation.png';
import groupTourImg from '../assets/solutions/group_tour.png';
import airportTransferImg from '../assets/solutions/airport_transfer.png';

const solutions = [
  {
    title: 'Car rental',
    desc: 'Safe and comfortable rides for your loved ones, making every family outing memorable.',
    image: familyTripImg,
    icon: Users,
    color: 'from-blue-500/20 to-transparent'
  },
  {
    title: 'Call Taxi',
    desc: 'Punctual and professional transportation for your corporate needs and meetings.',
    image: businessTravelImg,
    icon: Briefcase,
    color: 'from-slate-500/20 to-transparent'
  },
  {
    title: 'Wedding Transportation',
    desc: 'Elegant and grand vehicles to add a touch of luxury to your special day.',
    image: weddingImg,
    icon: Heart,
    color: 'from-pink-500/20 to-transparent'
  },
  {
    title: 'Group Tours',
    desc: 'Spacious Tempo Travellers and buses for fun-filled trips with your entire squad.',
    image: groupTourImg,
    icon: Globe,
    color: 'from-green-500/20 to-transparent'
  },
  {
    title: 'Airport Transfers',
    desc: 'Reliable 24/7 pickup and drop services to ensure you never miss a flight.',
    image: airportTransferImg,
    icon: PlaneTakeoff,
    color: 'from-orange-500/20 to-transparent'
  }
];

export default function TravelSolutions() {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
             ✨ Premium Solutions
          </div>
          <h2 className="reveal section-heading">Tailored <span>Travel Solutions</span></h2>
          <p className="reveal text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            We provide reliable and professional travel solutions for every occasion. 
            Your comfort and safety are our top priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title} 
              className={`reveal group relative bg-brand-50 rounded-3xl overflow-hidden border border-brand-100/50 hover:border-brand-300 transition-all duration-500 shadow-sm hover:shadow-xl ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-brand-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-800 mb-3 group-hover:text-brand-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.desc}
                </p>
                <a 
                  href="tel:+918110941314" 
                  className="flex items-center text-accent-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all hover:text-accent-700 cursor-pointer"
                >
                  Contact Now <span className="ml-1">→</span>
                </a>
              </div>
              
              {/* Decorative background element */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
