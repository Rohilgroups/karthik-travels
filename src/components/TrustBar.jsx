import { useEffect, useRef } from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Award,       value: '7+',   label: 'Years Experience',    color: 'text-yellow-500' },
  { icon: Users,       value: '1000+', label: 'Happy Customers',     color: 'text-green-500'  },
  { icon: Clock,       value: '24/7',  label: 'Support Available',   color: 'text-blue-400'   },
  { icon: ShieldCheck, value: '100%',  label: 'Safe & On-time',      color: 'text-emerald-400'},
];

export default function TrustBar() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal').forEach((el, i) =>
          setTimeout(() => el.classList.add('visible'), i * 100)
        );
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-brand-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="reveal flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className={`${color} bg-white/10 p-3 rounded-xl`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="text-brand-300 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
