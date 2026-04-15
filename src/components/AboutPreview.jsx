import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function AboutPreview() {
  const ref = useRef(null);
  const navigate = useNavigate();

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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: visual card */}
          <div className="reveal relative">
            <div className="bg-hero-gradient rounded-3xl p-10 text-white relative overflow-hidden shadow-card">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -left-4 -bottom-8 w-32 h-32 bg-accent-400/20 rounded-full" />
              <div className="relative z-10">
                <div className="text-6xl font-black text-accent-400 mb-2">10+</div>
                <div className="text-xl font-bold mb-4">Years of Trusted Service</div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { n: '500+', l: 'Happy Clients' },
                    { n: '50+',  l: 'Routes Covered' },
                    { n: '100%', l: 'Safety Record' },
                    { n: '24/7', l: 'Availability' },
                  ].map(({ n, l }) => (
                    <div key={l} className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-accent-300">{n}</div>
                      <div className="text-brand-200 text-xs mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4" /> About Us
            </div>
            <h2 className="reveal section-heading mb-5">
              Sivakasi's Most <span>Trusted</span> Travel Partner
            </h2>
            <p className="reveal text-gray-600 text-lg leading-relaxed mb-4">
              <strong className="text-brand-700">Karthik Travels</strong>, Sivakasi la trusted travel service aaga irukkom. 
              Namma safe, comfortable, and affordable journeys provide pannrom — local trips mudhala outstation varaikum.
            </p>
            <p className="reveal text-gray-500 leading-relaxed mb-8">
              Our experienced drivers, well-maintained fleet, and commitment to punctuality have made us the #1 choice 
              for thousands of families, corporates, and pilgrims across Tamil Nadu.
            </p>
            <div className="reveal">
              <button onClick={() => navigate('/about')} className="btn-primary">
                Read More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
