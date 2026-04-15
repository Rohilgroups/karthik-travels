import { Star } from 'lucide-react';
import AboutImg from '../../../assets/mountains2.jpg';

export default function AboutHero() {
  return (
    <div
      className="min-h-[70vh] flex items-center pt-24 pb-12 bg-hero-gradient text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${AboutImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-brand-950/30 z-0" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-accent-300 text-sm font-bold mb-6 animate-fade-in">
          <Star className="w-4 h-4 fill-accent-400 text-accent-400" /> Trusted in Sivakasi
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          About <span className="text-gradient-yellow">Karthik Travels</span>
        </h1>
        <p className="text-brand-100 text-xl max-w-2xl mx-auto leading-relaxed">
          Your journey, our priority. We've been moving Sivakasi since 2018 with safety and comfort.
        </p>
      </div>
    </div>
  );
}
