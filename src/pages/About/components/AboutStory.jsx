import { Award, MapPin, Users, Star, Heart } from 'lucide-react';
import animation2 from '../../../assets/animation2.png'

export default function AboutStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Award className="w-4 h-4" /> Our Story
            </div>
            <h2 className="relative z-10 section-heading mb-6 text-4xl">How We <span>Started</span></h2>
            <img 
              src={animation2} 
              alt="Animation" 
              className="absolute top-0 right-0 w-60 h-50 object-contain hidden lg:block opacity-100 -z-0" 
            />
            <p className="relative z-10 text-gray-600 text-lg leading-relaxed mb-6">
Karthik Travels Sivakasi started as a small beginning and has now grown into a trusted travel partner. Our main goal has always been to provide affordable and safe travel support for local people.            </p>
            <p className="relative z-10 text-gray-600 leading-relaxed mb-8">
              With over <strong className="text-brand-800">5+ years of experience</strong>, we have deep roots in Sivakasi and understand the unique travel needs of our community — from wedding trips to urgent hospital visits and happy family vacations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-8 bg-brand-900 rounded-3xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700/20 to-transparent pointer-events-none" />
              {[
                { num: '1000+', label: 'Trips Done', icon: MapPin },
                { num: '500+', label: 'Happy Clients', icon: Users },
                { num: '5+', label: 'Years Exp', icon: Star },
              ].map(({ num, label, icon: Icon }) => (
                <div key={label} className="text-center relative z-10 transition-transform group-hover:scale-105">
                  <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div className="text-2xl font-black text-accent-400">{num}</div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-300 font-bold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="reveal relative">
            <div className="aspect-square bg-brand-50 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" alt="Bus" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent-400 text-brand-900 p-6 rounded-3xl shadow-2xl flex items-center gap-4 border-4 border-white animate-float">
              <Heart className="w-10 h-10 fill-brand-900" />
              <div>
                <div className="font-black text-xl leading-none">100%</div>
                <div className="text-xs font-bold uppercase tracking-tight">Sivakasi's Pride</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
