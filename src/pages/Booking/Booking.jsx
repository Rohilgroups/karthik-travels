import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { Send, User, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import BookingImg from '../../assets/falls3.jpg';

const inputClass = 'w-full bg-white border-2 border-brand-100 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all duration-200 text-sm';

export default function Booking() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `🚌 *Booking Request - Karthik Travels*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Pickup:* ${form.pickup}%0A*Drop:* ${form.drop}%0A*Date:* ${form.date}%0A*Message:* ${form.message || 'No message'}`;
    window.open(`https://wa.me/918110941314?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', pickup: '', drop: '', date: '', message: '' }); }, 4000);
  };

  return (
    <>
      <Navbar />
      <div 
        className="min-h-[70vh] flex items-center pt-24 pb-12 bg-hero-gradient text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${BookingImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-950/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">Book a <span className="text-gradient-yellow">Ride</span></h1>
          <p className="text-brand-200 text-lg">Quick & easy booking — we confirm within minutes</p>
        </div>
      </div>

      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="reveal section-heading mb-4">Ready to <span>Travel?</span></h2>
              <p className="reveal text-gray-500 text-lg mb-8 leading-relaxed">
                Fill the form and we'll respond instantly via WhatsApp. Fast booking, no hassle.
              </p>
              <div className="reveal space-y-4">
                {[
                  { emoji: '⚡', title: 'Instant Confirmation', desc: 'Get confirmed within minutes of submitting' },
                  { emoji: '💰', title: 'Best Prices', desc: 'Transparent fares with no hidden charges' },
                  { emoji: '📞', title: '24/7 Support', desc: 'Always available for your queries' },
                ].map(({ emoji, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 bg-brand-50 rounded-xl border border-brand-100">
                    <span className="text-2xl">{emoji}</span>
                    <div>
                      <div className="font-semibold text-brand-800">{title}</div>
                      <div className="text-gray-500 text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="card border border-brand-100 p-8">
                <h3 className="text-xl font-bold text-brand-800 mb-6">Send Booking Request</h3>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🎉</div>
                    <h4 className="text-xl font-bold text-brand-700 mb-2">Request Sent!</h4>
                    <p className="text-gray-500">Your booking has been sent via WhatsApp. We'll confirm shortly!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" className={`${inputClass} pl-10`} required />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={`${inputClass} pl-10`} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                        <input type="text" name="pickup" value={form.pickup} onChange={handleChange} placeholder="Pickup Location" className={`${inputClass} pl-10`} required />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
                        <input type="text" name="drop" value={form.drop} onChange={handleChange} placeholder="Drop Location" className={`${inputClass} pl-10`} required />
                      </div>
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="date" name="date" value={form.date} onChange={handleChange} className={`${inputClass} pl-10`} required />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Additional message (optional)" rows={3} className={`${inputClass} pl-10 resize-none`} />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base shadow-lg hover:scale-105 transition-all">
                      <Send className="w-4 h-4" />
                      Send Booking Request
                    </button>
                    <p className="text-xs text-center text-gray-400">Booking request will be sent via WhatsApp</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
