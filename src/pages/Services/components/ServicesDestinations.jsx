import { useEffect, useRef } from 'react';
import { Search, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Madurai from '../../../assets/Destination/madurai.jpg';
import Munnar from '../../../assets/Destination/Munnar.jpg';
import Ooty from '../../../assets/Destination/Ooty.jpg';
import Kodaikanal from '../../../assets/Destination/Kodaikanal.jpg';
import Rameswaram from '../../../assets/Destination/Rameshwaram.jpg';
import Pondicherry from '../../../assets/Destination/Pondicherry.jpg';
import Kanyakumari from '../../../assets/Destination/Kanyakumari.jpg';
import Thekkady from '../../../assets/Destination/Thekkady.jpg';
import Thanjavur from '../../../assets/Destination/thanjavur.jpg';
import Alleppey from '../../../assets/Destination/allappey.jpg';
import Mysore from '../../../assets/Destination/Mysore.jpg';
import Hampi from '../../../assets/Destination/Hampi.jpg';
import Courtallam from '../../../assets/Destination/coutrallam.jpg';
import Coimbatore from '../../../assets/Destination/coimbatore.jpg';
import Yelagiri from '../../../assets/Destination/yelagiri.jpg';

// Local imports for destinations
const destinations = [
  { name: 'Madurai', sub: 'Temple City Grandeur', img: Madurai, span: 'md:col-span-2' },
  { name: 'Munnar', sub: 'Tea Garden Paradise', img: Munnar, span: 'md:row-span-2' },
  { name: 'Ooty', sub: 'Queen of Hill Stations', img: Ooty, span: '' },
  { name: 'Kodaikanal', sub: 'Princess of Hill Stations', img: Kodaikanal, span: 'md:col-span-2 md:row-span-2' },
  { name: 'Rameswaram', sub: 'The Spiritual Island', img: Rameswaram, span: '' },
  { name: 'Pondicherry', sub: 'French Riviera of the East', img: Pondicherry, span: '' },
  { name: 'Kanyakumari', sub: 'The Southernmost Tip', img: Kanyakumari, span: 'md:col-span-2' },
  { name: 'Thekkady', sub: 'Wildlife & Spice Hub', img: Thekkady, span: '' },
  { name: 'Thanjavur', sub: 'Culture & Heritage', img: Thanjavur, span: '' },
  { name: 'Alleppey', sub: 'Backwater Bliss', img: Alleppey, span: 'md:col-span-2' },
  { name: 'Mysore', sub: 'Palace of Royalty', img: Mysore, span: '' },
  { name: 'Hampi', sub: 'Lost Kingdom of Ruins', img: Hampi, span: '' },
  { name: 'Courtallam', sub: 'The Spa of South India', img: Courtallam, span: 'md:col-span-2' },
  { name: 'Coimbatore', sub: 'Manchester of South', img: Coimbatore, span: '' },
  { name: 'Yelagiri', sub: 'Silent Hill Escape', img: Yelagiri, span: '' },
];

export default function ServicesDestinations() {
  const navigate = useNavigate();
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            Explore Tamil Nadu
          </div>
          <h2 className="reveal section-heading">Our Top <span>Destinations</span></h2>
          <p className="reveal text-gray-500 mt-4 max-w-xl mx-auto italic">Visit this beautiful places with our Best karthik travels</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[300px]">
          {destinations.map((dest, i) => (
            <div 
              key={`${dest.name}-${i}`} 
              onClick={() => navigate('/booking', { state: { destination: dest.name } })}
              className={`reveal group relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-auto ${dest.span} shadow-lg cursor-pointer h-full bg-brand-50`}
            >
              {/* Image with zoom effect */}
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with content */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="absolute top-6 right-6 flex gap-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-accent-400 hover:text-brand-900 transition-colors">
                    <Search className="w-5 h-5 text-white group-hover:text-brand-900" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-accent-400 hover:text-brand-900 transition-colors">
                    <LinkIcon className="w-5 h-5 text-white group-hover:text-brand-900" />
                  </div>
                </div>
                
                <div className="translate-y-[20px] md:translate-y-[40px] group-hover:translate-y-0 transition-all duration-500">
                  <div className="bg-accent-400 text-brand-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-3">
                    {dest.name}
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                    {dest.name} — <span className="text-brand-300 font-medium italic">{dest.sub}</span>
                  </h3>
                </div>
              </div>

              {/* Mobile always-on names (optional but good for UX) */}
              <div className="absolute top-4 left-4 md:hidden">
                 <div className="bg-brand-900/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                   {dest.name}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
