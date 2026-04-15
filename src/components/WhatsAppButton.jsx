import { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.003 2C6.478 2 2 6.477 2 12.003c0 1.766.462 3.5 1.338 5.023L2.046 22l5.097-1.274A10.003 10.003 0 0012.003 22C17.527 22 22 17.524 22 12.003 22 6.477 17.527 2 12.003 2zm0 18.188a8.17 8.17 0 01-4.17-1.144l-.298-.177-3.086.77.806-2.985-.194-.307A8.162 8.162 0 013.836 12c0-4.504 3.664-8.168 8.168-8.168 4.504 0 8.168 3.664 8.168 8.168 0 4.504-3.664 8.188-8.169 8.188z"/>
    </svg>
  );
}

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleClick = () => {
    window.open(
      'https://wa.me/918110941314?text=Hi%20Karthik%20Travels!%20I%20want%20to%20book%20a%20ride.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showPopup && !dismissed && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-green-100 animate-fade-in-up">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close popup"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3 pr-4">
            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-800 text-sm">Karthik Travels</div>
              <div className="text-gray-600 text-sm mt-1">Hi! 👋 How can I help you?</div>
              <button
                onClick={handleClick}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors w-full text-center"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          if (dismissed) {
            setDismissed(false);
            setShowPopup(true);
          } else {
            setShowPopup(!showPopup);
          }
        }}
        onMouseEnter={() => !dismissed && setShowPopup(true)}
        className="relative bg-green-500 hover:bg-green-600 active:scale-95 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30" />
        <WhatsAppIcon className="w-8 h-8 relative z-10" />
      </button>
    </div>
  );
}
