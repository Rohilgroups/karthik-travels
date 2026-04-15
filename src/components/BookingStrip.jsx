import { useNavigate } from 'react-router-dom';

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.003 2C6.478 2 2 6.477 2 12.003c0 1.766.462 3.5 1.338 5.023L2.046 22l5.097-1.274A10.003 10.003 0 0012.003 22C17.527 22 22 17.524 22 12.003 22 6.477 17.527 2 12.003 2zm0 18.188a8.17 8.17 0 01-4.17-1.144l-.298-.177-3.086.77.806-2.985-.194-.307A8.162 8.162 0 013.836 12c0-4.504 3.664-8.168 8.168-8.168 4.504 0 8.168 3.664 8.168 8.168 0 4.504-3.664 8.188-8.169 8.188z"/>
    </svg>
  );
}

export default function BookingStrip() {
  const navigate = useNavigate();
  return (
    <section className="py-14 bg-gradient-to-r from-brand-800 to-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div>
            <p className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-1">Quick Booking</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">Need a ride <span className="text-accent-400">right now?</span></h2>
            <p className="text-brand-300 mt-2 text-sm">Call us, message us, or book online — we're always ready.</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href="tel:+918110941314"
              className="flex items-center gap-2 bg-white text-brand-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918110941314?text=Hi%20Karthick%20Travels!%20I%20need%20a%20ride."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <button
              onClick={() => navigate('/booking')}
              className="btn-primary text-sm"
            >
              🚌 Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
