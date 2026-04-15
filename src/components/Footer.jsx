import { NavLink } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/karthik travel logo.png';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logo} 
                alt="Karthik Travels Logo" 
                className="h-20 md:h-28 w-auto object-contain" 
              />
              <div className="flex flex-col">
                <div className="font-bold text-2xl text-white tracking-tight">Karthik Travels</div>
                <div className="text-accent-400 text-sm font-semibold uppercase tracking-widest mt-1">Sivakasi</div>
              </div>
            </div>
            <p className="text-brand-300 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted travel partner in Sivakasi. Safe, comfortable, and affordable journeys across Tamil Nadu and beyond.
            </p>
            <div className="flex gap-3">
              {[{ icon: Facebook, href: '#', label: 'Facebook' }, { icon: Instagram, href: 'https://www.instagram.com/Karthik_travels_95/', label: 'Instagram' }, { icon: Twitter, href: '#', label: 'Twitter' }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="bg-brand-800 hover:bg-brand-700 w-9 h-9 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-brand-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/booking', label: 'Book a Ride' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'} className={({ isActive }) =>
                    `text-sm flex items-center gap-2 group transition-colors ${isActive ? 'text-accent-400' : 'text-brand-400 hover:text-accent-400'}`
                  }>
                    <span className="w-1 h-1 bg-brand-600 rounded-full group-hover:bg-accent-400 transition-colors" />
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: '+91 81109 41314', href: 'tel:+918110941314' },
                { icon: Mail, text: 'karthiktravels699@gmail.com', href: 'mailto:karthiktravels699@gmail.com' },
                { icon: MapPin, text: 'Sivakasi, Tamil Nadu – 626123', href: 'https://share.google/Hgkwf9mjs9mmgdZwF' },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="text-brand-400 hover:text-accent-400 text-sm transition-colors">{text}</a>
                  ) : (
                    <span className="text-brand-400 text-sm">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-brand-500 text-sm">© {new Date().getFullYear()} Karthik Travels, Sivakasi. All rights reserved.</p>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-brand-600 text-xs">Safe Travel • Comfortable Journey • Trusted Service</p>
            <p className="text-brand-500 text-[10px] uppercase tracking-widest font-medium">
              Developed & Designed by <span className="text-accent-400">Rohil Technologies</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
