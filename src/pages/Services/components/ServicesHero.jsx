import ServicesImg from '../../../assets/img2.avif';

export default function ServicesHero() {
  return (
    <div 
      className="min-h-[75vh] flex items-center pt-24 pb-12 bg-hero-gradient text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${ServicesImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-brand-950/30 z-0" />
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <h1 className="reveal text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Our <span className="text-gradient-yellow">Services</span>
        </h1>
        <p className="reveal text-brand-100 text-xl max-w-2xl mx-auto leading-relaxed">
          Premium travel solutions in Sivakasi. From local commutes to across South India — we're at your service.
        </p>
      </div>
    </div>
  );
}
