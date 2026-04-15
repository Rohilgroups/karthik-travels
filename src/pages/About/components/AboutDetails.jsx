import { Shield, Heart, Clock, CheckCircle2, Users } from 'lucide-react';
import location from '../../../assets/serviceimg.jpg'
import animation1 from '../../../assets/animation1.png'

export default function AboutDetails() {
  return (
    <>
      {/* Mission & Vision */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal section-heading">Our <span>Mission & Vision</span></h2>
            <p className="reveal text-gray-500 mt-4 max-w-xl mx-auto">To redefine travel for Sivakasi with trust and excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Mission', desc: 'Your safety Our priority. To provide the most affordable and reliable car rental in Sivakasi with top-quality service.' },
              { icon: Heart, title: 'Vision', desc: 'To become the No.1 tempo traveller rental service in Sivakasi and Tamil Nadu. Client happiness is our  success.' },
              { icon: Clock, title: 'On-Time Service', desc: 'No delays. Sharp pickup and drop to ensure you never miss your schedule.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal card p-8 group border-b-4 border-brand-200 hover:border-accent-400 transition-all">
                <div className="bg-brand-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-brand-700" />
                </div>
                <h3 className="text-xl font-bold text-brand-800 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-3xl overflow-hidden bg-brand-100"><img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                  <div className="h-64 rounded-3xl overflow-hidden bg-brand-800 flex items-center justify-center p-6 text-center text-white">
                    <div>
                      <Shield className="w-12 h-12 mx-auto mb-4 text-accent-400" />
                      <div className="font-bold text-lg leading-tight">Safety Inspected Daily</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 rounded-3xl overflow-hidden bg-accent-400 flex items-center justify-center p-6 text-center text-brand-950">
                    <div>
                      <Users className="w-12 h-12 mx-auto mb-4" />
                      <div className="font-bold text-lg leading-tight">Expert Local Drivers</div>
                    </div>
                  </div>
                  <div className="h-48 rounded-3xl overflow-hidden bg-brand-100"><img src={location} className="w-full h-full object-contain" /></div>
                </div>
              </div>
            </div>
            <div className="reveal order-1 lg:order-2 relative">
              <h2 className="section-heading mb-8 relative z-10">Why <span>Choose Us?</span></h2>
              <img 
                src={animation1} 
                alt="Animation" 
                className="absolute top-0 right-0 w-60 h-50 object-contain hidden lg:block z-0 " 
              />
              <div className="space-y-6 relative z-10">
                {[
                  { title: 'Experienced Drivers', desc: '10+ years driving expertise in all TN routes.' },
                  { title: 'Affordable Price', desc: 'No hidden charges. Best rates in Sivakasi guaranteed.' },
                  { title: 'Clean & Sanitized Vehicles', desc: 'Fresh interiors and periodic maintenance for every ride.' },
                  { title: '24/7 Booking Support', desc: 'Instant confirmation via WhatsApp or Call anytime.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4 p-4 rounded-2xl hover:bg-brand-50 transition-colors">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-800">{title}</h4>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
