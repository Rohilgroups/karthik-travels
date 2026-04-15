import { useEffect, useRef } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPreview() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal').forEach((el, i) =>
          setTimeout(() => el.classList.add('visible'), i * 120)
        );
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-brand-50 to-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-white text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Phone className="w-4 h-4" /> Contact Us
          </div>
          <h2 className="reveal section-heading">Get In <span>Touch</span></h2>
          <p className="reveal text-gray-500 mt-3">We're always just a call or message away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact cards */}
          <div className="lg:col-span-1 space-y-4">
            {[
              { icon: Phone, label: 'Call Us', value: '+91 81109 41314', sub: 'Alt: +91 70101 88402', href: 'tel:+918110941314', color: 'bg-brand-700' },
              { icon: MapPin, label: 'Location', value: 'Sivakasi, Tamil Nadu', sub: 'Virudhunagar Dist – 626123', href: 'https://share.google/Hgkwf9mjs9mmgdZwF', color: 'bg-brand-800' },
              { icon: Clock, label: 'Working Hours', value: '24/7 ', sub: 'Monday to Sunday', href: null, color: 'bg-brand-600' },
            ].map(({ icon: Icon, label, value, sub, href, color }) => (
              <div key={label} className="reveal card p-5 flex items-center gap-4 border border-brand-100 group">
                <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-brand-500 font-semibold uppercase tracking-wide">{label}</div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-800 hover:text-brand-600 text-sm block">{value}</a>
                  ) : (
                    <div className="font-bold text-brand-800 text-sm">{value}</div>
                  )}
                  <div className="text-gray-400 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-2 h-full min-h-[400px]">
            <div className="card overflow-hidden border border-brand-100 h-full flex flex-col">
              {/* Google Maps Iframe */}
              <div className="relative flex-1 min-h-[350px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.901169911961!2d77.79781427479897!3d9.430068090648149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf2e0e0c1eeb%3A0xb13373e1b0d32783!2sKarthik%20Travels!5e0!3m2!1sen!2sin!4v1774524870524!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karthik Travels Location"
                ></iframe>
              </div>
              <div className="p-4 bg-white border-t border-brand-50">
                <a
                  href="https://maps.google.com/maps?ll=9.430068,77.800389&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=12768569850119661443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block text-sm py-2"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
