import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function ServicesCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-900 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-6">Ready to <span className="text-gradient-yellow">Travel?</span></h2>
        <p className="reveal text-brand-200 text-lg mb-12 max-w-xl mx-auto">
          Whatever your journey, we promise it'll be better with Karthick Travels. Send your booking request now.
        </p>
        
        <div className="reveal flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => navigate('/booking')}
            className="btn-primary text-base flex items-center gap-2 group"
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Book Your Ride
          </button>
          
          <a 
            href="tel:+918110941314" 
            className="bg-white text-brand-950 px-8 py-3 rounded-full font-black text-base hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          
          <a 
            href="https://wa.me/918110941314" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-black text-base transition-all flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
