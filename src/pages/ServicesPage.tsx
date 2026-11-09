import React from 'react';
import { Camera, Compass, House, MapPinned, ShoppingBag, Bike, ArrowUpRight, ShieldCheck, MessageCircle, Backpack, HeartPulse, Footprints, Shirt, BatteryCharging } from 'lucide-react';

const WHATSAPP_NUMBER = '919014441204';
const services = [
  { icon: House, number: '01', title: 'Private Homestays', tag: 'Stay like a local', description: 'Find welcoming, privately hosted stays with a more personal feel, local character and room to slow down.', image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85', details: ['Private and family-run stays', 'Local hospitality and authentic surroundings', 'Enquire about dates, amenities and rates'] },
  { icon: Bike, number: '02', title: 'Scooter-only Local Guides', tag: 'Small roads. Real discoveries.', description: 'Explore with a local guide on a scooter. This experience is designed around two-wheel travel — no bus tours or bus transfers.', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85', details: ['Local guide accompanies your ride', 'Scooter-based routes and flexible stops', 'Helmet and safe-riding expectations discussed before booking'] },
  { icon: Camera, number: '03', title: 'Travel Photography & Content', tag: 'Keep the moments', description: 'Turn your trip into a collection of memorable photos and social-ready content, captured along the way.', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85', details: ['Personal and couple travel shoots', 'Short-form reels and travel clips', 'Creator-style destination coverage'] },
  { icon: Compass, number: '04', title: 'Individual Travel Guides', tag: 'Your trip, your pace', description: 'Get a dedicated guide for a more personal journey, with a route and pace shaped around your interests.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85', details: ['One-to-one local guidance', 'Custom routes and hidden places', 'Flexible plans for solo travellers, couples or families'] },
];

const gear = [
  { icon: Camera, title: 'Cameras & accessories', description: 'Capture your journey with the right camera gear.' },
  { icon: HeartPulse, title: 'Travel medical kits', description: 'Basic first-aid and travel-care essentials.' },
  { icon: Footprints, title: 'Hiking shoes', description: 'Comfortable footwear for trails and long walks.' },
  { icon: Shirt, title: 'Travel clothing', description: 'Practical clothing for changing weather and activities.' },
  { icon: BatteryCharging, title: 'Chargers & power banks', description: 'Keep your phone and devices powered on the go.' },
  { icon: Backpack, title: 'Outdoor & travel essentials', description: 'Useful add-ons for a smoother trip.' },
];

const enquiryLink = (service: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Roamly! I'm interested in ${service}. Please share details, availability and pricing.`)}`;

export const ServicesPage: React.FC = () => (
  <section id="roamly-services" className="py-20 sm:py-24 bg-[#F8F8F5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]"><span className="w-7 h-px bg-[#1769E8]" /> More ways to roam <span className="w-7 h-px bg-[#1769E8]" /></span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#101C35] mt-4">Travel beyond the itinerary.</h2>
        <p className="text-[#64748B] text-base sm:text-lg mt-4 leading-relaxed">Stay local, explore on two wheels, meet your own guide and capture every moment. Roamly brings the little details of a great trip together.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return <article key={service.number} className="group bg-white rounded-[1.75rem] overflow-hidden border border-slate-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#101C35]">{service.tag}</span>
              <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-[#1769E8] flex items-center justify-center shadow-lg"><Icon className="w-5 h-5" /></span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#1769E8] text-xs font-bold tracking-widest"><span>{service.number}</span><span className="h-px w-8 bg-blue-200" /> ROAMLY SERVICE</div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C35] mt-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 mt-3">{service.description}</p>
              <ul className="mt-5 space-y-2.5">{service.details.map((detail) => <li key={detail} className="flex items-start gap-2.5 text-sm text-slate-600"><ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />{detail}</li>)}</ul>
              <a href={enquiryLink(service.title)} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1769E8] hover:bg-[#1253BD] text-white px-5 py-3 text-sm font-semibold transition-colors">Enquire on WhatsApp <ArrowUpRight className="w-4 h-4" /></a>
            </div>
          </article>;
        })}
      </div>
      <div className="mt-20 rounded-[2rem] bg-[#101C35] text-white p-7 sm:p-12 overflow-hidden relative">
        <div className="absolute -right-16 -top-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-[0.2em]"><ShoppingBag className="w-4 h-4" /> Roamly travel shop</div>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mt-4 items-start">
            <div><h3 className="font-serif text-3xl sm:text-4xl font-bold">Pack smart. Go further.</h3><p className="text-blue-100/75 mt-4 leading-relaxed">Browse the travel essentials you may need for your next adventure. Ask us about product options, availability and pricing before you buy.</p><a href={enquiryLink('travel accessories and gear')} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-[#101C35] hover:bg-blue-50 px-5 py-3 text-sm font-bold transition-colors">Ask about travel gear <MessageCircle className="w-4 h-4" /></a><p className="text-xs text-blue-100/50 mt-3">Product enquiries only — stock and prices are confirmed individually.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {gear.map((item) => { const GearIcon = item.icon; return <a key={item.title} href={enquiryLink(item.title)} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.12] p-4 transition-colors"><div className="flex items-center justify-between"><GearIcon className="w-5 h-5 text-blue-300" /><ArrowUpRight className="w-4 h-4 text-blue-100/50 group-hover:text-white" /></div><h4 className="font-semibold text-sm mt-4">{item.title}</h4><p className="text-xs leading-relaxed text-blue-100/60 mt-1">{item.description}</p></a>; })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 text-center"><p className="text-sm text-slate-500">Have a different travel request?</p><a href={enquiryLink('a custom travel experience')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 text-[#1769E8] font-bold hover:gap-3 transition-all">Talk to the Roamly team <ArrowUpRight className="w-4 h-4" /></a></div>
    </div>
  </section>
);
