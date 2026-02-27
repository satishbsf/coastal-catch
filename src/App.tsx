import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Download, 
  Instagram, 
  MapPin, 
  Phone, 
  Star, 
  Twitter, 
  Facebook,
  Menu as MenuIcon,
  X,
  UtensilsCrossed,
  Waves,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#heritage' },
    { name: 'Chef\'s Special', href: '#specials' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-coastal-navy/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Anchor className="text-coastal-turquoise w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Coastal <span className="text-coastal-coral">Catch</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-coastal-turquoise transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reserve" 
            className="bg-coastal-blue hover:bg-coastal-blue/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-coastal-navy border-b border-white/10 p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reserve" 
                className="bg-coastal-blue text-white px-6 py-3 rounded-xl text-center font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-coastal-navy">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-coastal-navy via-coastal-navy/70 to-transparent z-10"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-coastal-turquoise/20 text-coastal-turquoise text-xs font-bold uppercase tracking-widest mb-4">
            Coral Sands Experience
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
            Freshness from the <span className="text-coastal-coral italic">Coast</span> to Pune
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
            Experience premium seafood with our signature 'Coral Sands' flavor. Sourced daily from the docks, prepared with Malvani passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#reserve" 
              className="bg-coastal-blue text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-coastal-blue/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-coastal-blue/20"
            >
              <Calendar className="w-5 h-5" />
              Make a Reservation
            </a>
            <a 
              href="#menu" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all"
            >
              View Today's Catch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Signature Tandoori Pomfret",
      price: "₹850",
      desc: "Fresh whole pomfret marinated in our secret Coral Sands masala and char-grilled.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop",
      badge: "Chef's Choice"
    },
    {
      id: 2,
      name: "Butter Garlic Jumbo Prawns",
      price: "₹650",
      desc: "Sautéed with roasted garlic, fresh herbs, and a splash of coastal white wine sauce.",
      image: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Malvani Surmai Curry",
      price: "₹750",
      desc: "Traditional coconut-based curry with authentic hand-pounded spices from Ratnagiri.",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1930&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 bg-coastal-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-coastal-coral font-bold uppercase tracking-widest text-sm mb-2">Featured Selection</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Signature Coastal Delights</h3>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="p-2 rounded-full border border-white/10 hover:bg-coastal-turquoise hover:text-coastal-navy transition-all">
              <ChevronLeft />
            </button>
            <button className="p-2 rounded-full border border-white/10 hover:bg-coastal-turquoise hover:text-coastal-navy transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-coastal-turquoise/5 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {dish.badge && (
                  <div className="absolute top-4 right-4 bg-coastal-coral text-white text-xs font-bold px-3 py-1 rounded-full">
                    {dish.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white leading-tight">{dish.name}</h4>
                  <span className="text-coastal-turquoise font-bold">{dish.price}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{dish.desc}</p>
                <button className="w-full py-3 border border-coastal-blue/30 text-coastal-blue font-bold rounded-xl hover:bg-coastal-blue hover:text-white transition-all">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChefSpecial = () => {
  return (
    <section id="specials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-coastal-coral/5 blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coastal-turquoise/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?q=80&w=1974&auto=format&fit=crop" 
              alt="Chef's Special Lobster" 
              className="rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-coastal-turquoise p-8 rounded-2xl text-coastal-navy shadow-xl">
              <p className="text-4xl font-black italic leading-none">Seasonal</p>
              <p className="font-bold tracking-widest uppercase text-xs mt-1">Availability</p>
            </div>
          </motion.div>

          <div>
            <span className="text-coastal-turquoise font-bold uppercase tracking-[0.2em] text-sm block mb-4">Monthly Highlight</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Chef's Special: <br />
              <span className="text-coastal-coral italic">Thermidor Lobster</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our crown jewel. A whole succulent lobster, flambéed with brandy, folded into a rich creamy egg-based sauce, topped with Gruyère cheese and baked to golden perfection. Served with herbed wild rice and charred asparagus.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Live tank freshness guaranteed",
                "Sustainably sourced from Konkan reefs",
                "Custom spice levels available"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-coastal-turquoise w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-coastal-coral">₹2,450</span>
              <span className="text-slate-500 line-through">₹3,200</span>
            </div>

            <button className="bg-coastal-blue text-white px-10 py-4 rounded-full font-bold hover:bg-coastal-blue/90 transition-all shadow-xl shadow-coastal-blue/20 transform hover:-translate-y-1">
              Order This Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Heritage = () => {
  const features = [
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Daily Catch",
      desc: "Our logistics network ensures seafood travels from the docks to our kitchen within 6 hours."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Authentic Spices",
      desc: "We don't use factory powders. All our masalas are stone-ground daily following family secrets."
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Coastal Ambience",
      desc: "A soothing beach-themed interior that transports you to a seaside shack in Goa."
    }
  ];

  return (
    <section id="heritage" className="py-24 bg-coastal-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-coastal-coral font-bold uppercase tracking-widest text-sm mb-4">Our Heritage</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Bringing the Ocean to Your Plate</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Founded on the principle of transparency and freshness, Coastal Catch bridges the gap between the Arabian Sea and Pune's culinary scene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-coastal-blue group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <div className="text-coastal-turquoise group-hover:text-white">
                  {f.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{f.title}</h4>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuGrid = () => {
  const items = [
    { name: "Crab Lollipops", price: "₹420", desc: "Minced crab meat with local herbs and panko" },
    { name: "Stuffed Squid Rings", price: "₹480", desc: "Shrimp stuffing with spicy rechado paste" },
    { name: "Kokum Solkadhi Shot", price: "₹120", desc: "Classic digestive beet-colored coconut milk" },
    { name: "Bombil Fry (Bombay Duck)", price: "₹350", desc: "Crunchy semolina coated fresh water fish" },
    { name: "Prawns Ghee Roast", price: "₹550", desc: "Traditional Mangalorean style spicy prawns" },
    { name: "Clams Sukka", price: "₹450", desc: "Fresh clams tossed with grated coconut and spices" }
  ];

  return (
    <section id="menu" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white italic">Small Bites & Starters</h2>
            <div className="w-24 h-1 bg-coastal-turquoise mt-4"></div>
          </div>
          <button className="flex items-center gap-2 text-coastal-blue font-bold hover:text-coastal-turquoise transition-colors group">
            Download Full Menu 
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-6 group">
              <div className="flex-1">
                <h5 className="text-xl font-bold text-white mb-1 group-hover:text-coastal-turquoise transition-colors">{item.name}</h5>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
              <span className="font-bold text-coastal-coral text-xl ml-4">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ananya Deshpande",
      role: "Food Critic, Pune Times",
      text: "The most authentic Malvani food I've had in Pune. The Surmai curry took me back to my grandmother's kitchen in Malvan.",
      rating: 5
    },
    {
      name: "Vikram Seth",
      role: "Regular Guest",
      text: "Incredible Lobster Thermidor! The quality of seafood is unmatched. Pune finally has a destination for serious seafood lovers.",
      rating: 5,
      featured: true
    },
    {
      name: "Meera Joshi",
      role: "Hospitality Expert",
      text: "The Coral Sands theme is so relaxing. Perfect spot for a Sunday family lunch. Their butter garlic prawns are addictive!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-coastal-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-20">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all ${rev.featured ? 'bg-white/5 border-coastal-turquoise/30 md:-translate-y-4 shadow-2xl shadow-coastal-turquoise/5' : 'bg-white/5 border-white/10'}`}
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-coastal-turquoise font-bold">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h6 className="font-bold text-white">{rev.name}</h6>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  return (
    <section id="reserve" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-coastal-blue/5"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-2/5 coral-gradient p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold mb-6">Reserve Your Table</h3>
              <p className="text-white/80 mb-10 leading-relaxed">
                Join us for an unforgettable coastal journey. We recommend booking 24 hours in advance for weekend dinners.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+91 20 2345 6789</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Koregaon Park, Pune</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-inner opacity-60 h-40 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 p-12 bg-slate-900">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-slate-500">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-coastal-blue focus:border-transparent py-4 px-5 text-white outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-slate-500">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-coastal-blue focus:border-transparent py-4 px-5 text-white outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-slate-500">Guests</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-coastal-blue focus:border-transparent py-4 px-5 text-white outline-none transition-all appearance-none">
                  <option className="bg-slate-900">2 Persons</option>
                  <option className="bg-slate-900">4 Persons</option>
                  <option className="bg-slate-900">6+ Persons</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-slate-500">Special Request</label>
                <textarea 
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-coastal-blue focus:border-transparent py-4 px-5 text-white outline-none transition-all"
                  placeholder="Birthday, anniversary, or dietary needs..."
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button 
                  type="submit"
                  className="w-full bg-coastal-blue text-white py-5 rounded-xl font-bold hover:bg-coastal-blue/90 transition-all shadow-xl shadow-coastal-blue/20 transform hover:-translate-y-1"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-coastal-navy text-slate-500 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Anchor className="text-coastal-turquoise w-6 h-6" />
              <h1 className="text-xl font-bold tracking-tight text-white">
                Coastal <span className="text-coastal-coral">Catch</span>
              </h1>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Bringing the freshest seafood from the Konkan coast to the plates of Pune since 2018.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-coastal-blue hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h6>
            <ul className="space-y-4 text-sm">
              {['Today\'s Menu', 'Our Chefs', 'Gift Vouchers', 'Private Events'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-coastal-turquoise transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Opening Hours</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-slate-300">12PM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sun</span>
                <span className="text-slate-300">12PM - 12AM</span>
              </li>
              <li className="text-coastal-coral italic mt-4">Lunch Service: 12PM - 4PM</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h6>
            <p className="text-xs mb-6">Subscribe for seasonal specials and events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-coastal-turquoise w-full"
              />
              <button className="bg-coastal-blue text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase">
          <p>© 2024 Coastal Catch Seafood Restaurant. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <ChefSpecial />
      <Heritage />
      <MenuGrid />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
}
