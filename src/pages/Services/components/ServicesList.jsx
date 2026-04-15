import { useNavigate } from 'react-router-dom';
import { Bus, Car, Globe, MapPin, Package, Compass } from 'lucide-react';

const services = [
  { icon: Bus, title: 'Van Booking', desc: 'Mahindra 17 & 21 seater vans for group travel, events, and school/college trips.', color: 'from-brand-700 to-brand-600' },
  { icon: Car, title: 'Car Rental', desc: 'Swift, Indica, Dzire (4 seats) and Ertiga (7 seats) available for local & outstation.', color: 'from-brand-800 to-brand-700' },
  { icon: Globe, title: 'Tour Packages', desc: 'Curated tour packages across Tamil Nadu — hill stations, temples, and beaches.', color: 'from-brand-600 to-brand-500' },
  { icon: MapPin, title: 'Local Trips', desc: 'Affordable local travel within Sivakasi for shopping, events, and daily needs.', color: 'from-brand-700 to-brand-600' },
  { icon: Compass, title: 'Outstation Trips', desc: 'One-way and round-trip outstation rides across Tamil Nadu and neighboring states.', color: 'from-brand-800 to-brand-700' },
  { icon: Package, title: 'Corporate Travel', desc: 'Reliable employee transportation and corporate event travel solutions.', color: 'from-brand-600 to-brand-500' },
];

export default function ServicesList() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="reveal card group overflow-hidden border border-brand-100">
              <div className={`bg-gradient-to-r ${color} p-6 relative overflow-hidden`}>
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-800 mb-2 group-hover:text-brand-600 transition-colors uppercase tracking-tight">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
                <button 
                  onClick={() => navigate('/booking')}
                  className="w-full bg-brand-50 text-brand-700 font-bold py-3 rounded-xl hover:bg-brand-700 hover:text-white transition-all duration-300 text-sm flex items-center justify-center gap-2 border border-brand-200"
                >
                   🚌 Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
