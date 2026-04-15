import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Car, Bus, Globe, Plane, MapPin, Heart, Briefcase } from 'lucide-react';
import Airport from '../../../assets/airport-pickup.jpg'
import Taxi from '../../../assets/Taxi.png'
import Tempo from '../../../assets/tempolatest-Copy.jpg'
import car from '../../../assets/swift sedon.avif'
import MarriageCar from '../../../assets/mrg car.jpg'

const details = [
  {
    icon: Car,
    title: 'Car Rental Service in Sivakasi',
    area: 'Sivakasi & Outstation',
    desc: 'We offer the best car rental in Sivakasi with flexible pricing options. Providing cheap car rental Sivakasi and professional car hire Sivakasi for all your travel needs.',
    points: ['Swift / Etios / Dzire (4 Seats)', 'Ertiga (7 Seater SUV)', 'Affordable & Reliable'],
    img: car
  },
  {
    icon: Heart,
    title: 'Wedding Car Rental Sivakasi',
    area: 'Special Occasions',
    desc: 'Luxury wedding car rental in Sivakasi with premium decoration options. Make your special day even more memorable with our elegant fleet.',
    points: ['Premium Decorated Cars', 'Swift / Dzire / Ertiga', 'Professional Attire Drivers'],
    img: MarriageCar
  },
  {
    icon: Bus,
    title: 'Tempo Traveller Rental in Sivakasi',
    area: 'Group Travel Specialist',
    desc: 'Book the best tempo traveller in Sivakasi for group travel. Ideal for tours, family functions, and pilgrimages.',
    points: ['14 Seater Tempo Traveller', 'Pushback Seats & Music', 'Perfect for Pilgrimage'],
    img: Tempo
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel Services',
    area: 'Business Solutions',
    desc: 'Reliable corporate taxi service in Sivakasi for your business needs. We handle employee transport, guest pickups, and official tours.',
    points: ['Monthly Billing Available', 'Priority Support', 'Top-tier Cleanliness'],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Globe,
    title: 'Taxi Service in Sivakasi',
    area: '24/7 Availability',
    desc: '24/7 taxi service in Sivakasi for local and outstation travel. Dedicated drivers and reliable service guaranteed.',
    points: ['24/7 Availability', 'Local & Outstation', 'Affordable Pricing'],
    img: Taxi
  },
  {
    icon: Plane,
    title: 'Airport Taxi Service Sivakasi',
    area: 'All Airports Coverage',
    desc: 'Book airport taxi in Sivakasi for reliable and on-time pickup and drop services. We cover all major airports in the region.',
    points: ['Madurai Airport', 'Tuticorin Airport', 'Trichy Airport'],
    img: Airport
  }
];

export default function ServicesDetailed() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <CheckCircle2 className="w-4 h-4" /> Trusted Service
          </div>
          <h2 className="reveal section-heading">Our <span>Detailed Offerings</span></h2>
          <p className="reveal text-gray-500 mt-4 max-w-xl mx-auto">“We’re building detailed information so that your trust grows.”</p>
        </div>
        
        <div className="space-y-24">
          {details.map((item, i) => (
            <div key={item.title} className={`reveal flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-video bg-brand-50 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 z-20 bg-accent-400 text-brand-900 px-4 py-2 rounded-full text-xs font-black shadow-lg">
                    <MapPin className="w-3 h-3 inline mr-1" /> {item.area}
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                   <div className="bg-brand-100 p-3 rounded-2xl">
                     <item.icon className="w-6 h-6 text-brand-700" />
                   </div>
                   <h3 className="text-3xl font-black text-brand-800 tracking-tight italic uppercase">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{item.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {item.points.map(pt => (
                    <div key={pt} className="flex items-center gap-2 text-brand-700 font-bold text-sm bg-brand-50/50 p-3 rounded-xl border border-brand-100">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {pt}
                    </div>
                  ))}
                </div>
                
                {/* Pricing / Packages Placement */}
                <div className="p-6 bg-brand-950 rounded-3xl flex items-center justify-between gap-6 shadow-glow-green">
                    <div>
                      <div className="text-[10px] font-black text-brand-300 uppercase tracking-[0.2em] mb-1">Booking Info</div>
                      <div className="text-white font-black text-xl italic uppercase font-heading">Contact for quote</div>
                    </div>
                   <button 
                     onClick={() => navigate('/booking')}
                     className="bg-accent-400 hover:bg-accent-500 text-brand-900 px-6 py-3 rounded-2xl text-xs font-black transition-all shadow-lg hover:scale-105"
                   >
                     Book Now
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
