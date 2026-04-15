import { useEffect, useRef, useState } from 'react';
import { Send, User, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';

const inputClass =
  'w-full bg-white border-2 border-brand-100 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all duration-200 text-sm';

export default function Booking() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: '', phone: '', pickup: '', drop: '', date: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `🚌 *Booking Request - Karthick Travels*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Pickup:* ${form.pickup}%0A*Drop:* ${form.drop}%0A*Date:* ${form.date}%0A*Message:* ${form.message || 'No message'}`;
    window.open(`https://wa.me/918110941314?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Book a Ride
            </div>
            <h2 className="reveal section-heading mb-4">
              Ready to <span>Travel?</span>
            </h2>
            <p className="reveal text-gray-500 text-lg mb-8 leading-relaxed">
              Fill in the form and we'll get back to you instantly via WhatsApp or phone. 
              Fast booking, no hassle — just great travel.
            </p>

            {/* Why book with us */}
            <div className="reveal space-y-4">
              {[
                { emoji: '⚡', title: 'Instant Confirmation', desc: 'Get booking confirmation within minutes' },
                { emoji: '💰', title: 'Best Prices', desc: 'Transparent pricing with no hidden charges' },
                { emoji: '📞', title: '24/7 Support', desc: 'We\'re always available for your queries' },
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

          {/* Right: Form */}
          <div className="reveal">
            <div className="card border border-brand-100 p-8">
              <h3 className="text-xl font-bold text-brand-800 mb-6">Send Booking Request</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-brand-700 mb-2">Request Sent!</h4>
                  <p className="text-gray-500">Your booking request has been sent via WhatsApp. We'll confirm shortly!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className={`${inputClass} pl-10`}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`${inputClass} pl-10`}
                      required
                    />
                  </div>

                  {/* Pickup & Drop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                      <input
                        type="text"
                        name="pickup"
                        value={form.pickup}
                        onChange={handleChange}
                        placeholder="Pickup Location"
                        className={`${inputClass} pl-10`}
                        required
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
                      <input
                        type="text"
                        name="drop"
                        value={form.drop}
                        onChange={handleChange}
                        placeholder="Drop Location"
                        className={`${inputClass} pl-10`}
                        required
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Additional message (optional)"
                      rows={3}
                      className={`${inputClass} pl-10 resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base">
                    <Send className="w-4 h-4" />
                    Send Booking Request
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-2">
                    Your request will be sent via WhatsApp for instant response
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
