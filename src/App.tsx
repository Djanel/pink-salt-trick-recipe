import { motion } from "motion/react";
import { 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  Play, 
  ShoppingBag, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { useState, useCallback, useRef } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-salt-pink/30">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-serif font-bold text-salt-deep">PinkSalt<span className="text-earth">Magic</span></div>
      <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
        <a href="#recipe" className="hover:text-salt-deep transition-colors">Recipe</a>
        <a href="#benefits" className="hover:text-salt-deep transition-colors">Benefits</a>
        <a href="#store" className="hover:text-salt-deep transition-colors">Shop</a>
        <a href="#blog" className="hover:text-salt-deep transition-colors">Blog</a>
      </div>
      <button className="bg-salt-deep text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-earth transition-all shadow-lg shadow-salt-pink/50">
        Get the Guide
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=2000" 
        alt="Pink Himalayan Salt" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-cream"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 bg-salt-pink text-salt-deep rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          The Chef's Secret Revealed
        </span>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
          Discover the Magic of <span className="text-salt-deep italic">Pink Salt</span>
        </h1>
        <p className="text-xl text-earth/80 mb-8 max-w-lg leading-relaxed">
          A simple trick to transform your dishes from ordinary to extraordinary. Unveil the secret ingredient that professional chefs swear by.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#recipe" className="bg-salt-deep text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-earth transition-all text-center shadow-xl shadow-salt-pink/40 flex items-center justify-center gap-2">
            Try the Recipe Now <ArrowRight size={20} />
          </a>
          <a href="#benefits" className="border border-salt-deep text-salt-deep px-8 py-4 rounded-full text-lg font-semibold hover:bg-salt-pink transition-all text-center">
            Learn the Benefits
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" 
            alt="Beautifully Plated Dish" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-sm font-medium italic">"This trick changed my cooking forever!"</p>
          <p className="text-xs text-earth/60 mt-2">— Chef Marco R.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&q=80&w=1000" 
            alt="Pink Salt Crystals" 
            className="rounded-3xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why the Pink Salt Trick Works</h2>
          <p className="text-lg text-earth/80 mb-6 leading-relaxed">
            Pink Himalayan salt isn't just a pretty color. It's packed with over 84 minerals and trace elements that enhance the natural flavors of your food while providing essential nutrients.
          </p>
          <p className="text-lg text-earth/80 mb-8 leading-relaxed">
            Our "trick" involves a specific timing and temperature application that unlocks these minerals, creating a flavor profile that table salt simply can't match.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-salt-deep" />
              <span className="font-medium">100% Natural & Unrefined</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-salt-deep" />
              <span className="font-medium">Rich in Essential Minerals</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-salt-deep" />
              <span className="font-medium">Enhanced Flavor Profile</span>
            </div>
          </div>
          <button className="text-salt-deep font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Learn More About the Benefits <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Recipe = () => (
  <section id="recipe" className="py-24 bg-cream">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">The Perfect Pink Salt Trick Recipe</h2>
        <p className="text-earth/60 uppercase tracking-widest text-sm font-bold">Simple • Healthy • Delicious</p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
        <div className="aspect-video relative group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1466633364833-51e2ee29511f?auto=format&fit=crop&q=80&w=1200" 
            alt="Cooking with Salt" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Play className="text-salt-deep ml-1" size={32} fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-bold uppercase tracking-widest mb-1">Watch Tutorial</p>
            <p className="text-2xl font-serif italic">See the trick in action</p>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-6 border-b border-salt-pink pb-2">Ingredients</h3>
              <ul className="space-y-4 text-earth/80">
                <li>• 2 tbsp High-quality Pink Salt</li>
                <li>• 1 lb Fresh seasonal vegetables</li>
                <li>• 3 tbsp Extra virgin olive oil</li>
                <li>• 1 tsp Fresh cracked pepper</li>
                <li>• Zest of half a lemon</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 border-b border-salt-pink pb-2">Instructions</h3>
              <div className="space-y-8">
                {[
                  { step: 1, text: "Preheat your oven to 425°F (220°C). This high heat is crucial for the salt trick." },
                  { step: 2, text: "Toss your vegetables in olive oil and pepper. Do NOT add the salt yet." },
                  { step: 3, text: "Spread vegetables on a pre-heated baking sheet. Roast for 15 minutes." },
                  { step: 4, text: "The Trick: Remove from oven, sprinkle the pink salt evenly, and return for 5 more minutes. This creates a mineral crust." },
                  { step: 5, text: "Finish with lemon zest and serve immediately while the salt crystals are still 'active'." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 bg-salt-pink text-salt-deep rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </span>
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <button className="bg-salt-deep text-white px-8 py-4 rounded-full font-bold hover:bg-earth transition-all shadow-lg">
          Save the Recipe
        </button>
        <button className="border border-salt-deep text-salt-deep px-8 py-4 rounded-full font-bold hover:bg-salt-pink transition-all">
          Get the Ingredients
        </button>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="py-24 bg-earth text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Pink Salt?</h2>
        <p className="text-salt-pink/60 uppercase tracking-widest text-sm font-bold">Science-Backed Benefits</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { title: "Mineral Rich", desc: "Contains 84+ essential minerals including calcium, potassium, and magnesium." },
          { title: "Natural Detox", desc: "Helps balance your body's pH levels and supports natural detoxification." },
          { title: "Flavor Booster", desc: "Unlike table salt, it enhances the subtle notes of ingredients without overpowering." }
        ].map((benefit, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="w-12 h-12 bg-salt-pink rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="text-earth" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-white/70 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto text-center italic text-2xl font-serif">
        <p>"Pink Himalayan salt is a game-changer for anyone looking to reduce processed sodium while maximizing flavor and mineral intake."</p>
        <p className="text-sm font-sans not-italic uppercase tracking-widest mt-6 text-salt-pink">— Dr. Sarah Jenkins, Nutritionist</p>
      </div>
    </div>
  </section>
);

const Variations = () => {
  const [activeVariation, setActiveVariation] = useState(0);
  const variations = [
    { name: "Herbal Infusion", ingredients: "Add dried rosemary and thyme", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" },
    { name: "Zesty Citrus", ingredients: "Lemon, lime, and orange zest", image: "https://images.unsplash.com/photo-1591333139245-2b411844a8bc?auto=format&fit=crop&q=80&w=800" },
    { name: "Spicy Kick", ingredients: "Smoked paprika and chili flakes", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Variations & Customization</h2>
          <p className="text-earth/60">Make the trick your own with these creative twists.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {variations.map((v, i) => (
              <button 
                key={i}
                onClick={() => setActiveVariation(i)}
                className={`w-full text-left p-6 rounded-2xl transition-all border-2 ${activeVariation === i ? 'border-salt-deep bg-salt-pink/20' : 'border-transparent bg-cream hover:bg-salt-pink/10'}`}
              >
                <h4 className="text-xl font-bold mb-1">{v.name}</h4>
                <p className="text-earth/60">{v.ingredients}</p>
              </button>
            ))}
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <motion.img 
              key={activeVariation}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={variations[activeVariation].image} 
              alt={variations[activeVariation].name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-24 bg-cream overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Real Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Emily S.", text: "My kids actually eat their broccoli now! The salt crust makes it so savory.", img: "https://i.pravatar.cc/150?u=emily" },
          { name: "David L.", text: "I'm a hobby chef and this trick impressed all my dinner guests last weekend.", img: "https://i.pravatar.cc/150?u=david" },
          { name: "Jessica K.", text: "Simple, effective, and healthy. I've replaced all my table salt with pink salt.", img: "https://i.pravatar.cc/150?u=jessica" }
        ].map((story, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img src={story.img} alt={story.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
              <div className="font-bold">{story.name}</div>
            </div>
            <p className="text-earth/80 italic">"{story.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "Is pink salt really better than table salt?", a: "Yes, it's unrefined and contains dozens of trace minerals that are stripped from table salt during processing." },
    { q: "Can I use this trick with any vegetable?", a: "Absolutely! It works best with root vegetables and cruciferous ones like broccoli or cauliflower." },
    { q: "Where can I buy high-quality pink salt?", a: "Look for 'Himalayan Pink Salt' that is certified organic and unrefined. We recommend our curated selection in the shop section." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-salt-pink">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold">{faq.q}</span>
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="pb-6 text-earth/70 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadGen = () => (
  <section className="py-24 bg-salt-pink/30">
    <div className="max-w-5xl mx-auto px-6 bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-salt-pink/20 rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get our Free Ultimate Guide to Pink Salt Tricks</h2>
          <p className="text-lg text-earth/70 mb-8">Join 10,000+ home cooks and receive our exclusive recipe book and weekly tips.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-6 py-4 rounded-full border border-salt-pink focus:outline-none focus:ring-2 focus:ring-salt-deep transition-all"
            />
            <button className="w-full bg-salt-deep text-white px-8 py-4 rounded-full font-bold hover:bg-earth transition-all shadow-lg">
              Sign Up for Free Recipes!
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
            alt="Recipe Book" 
            className="rounded-2xl shadow-xl rotate-3"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Store = () => (
  <section id="store" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Shop Our Favorites</h2>
          <p className="text-earth/60">The tools you need for the perfect salt trick.</p>
        </div>
        <button className="text-salt-deep font-bold flex items-center gap-2">
          View All <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: "Premium Fine Pink Salt", price: "$12.99", img: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=400" },
          { name: "Coarse Grinder Salt", price: "$14.99", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" },
          { name: "Ceramic Salt Mill", price: "$29.99", img: "https://images.unsplash.com/photo-1590601448391-686212cb50b5?auto=format&fit=crop&q=80&w=400" },
          { name: "Salt Trick Starter Kit", price: "$45.00", img: "https://images.unsplash.com/photo-1466633364833-51e2ee29511f?auto=format&fit=crop&q=80&w=400" }
        ].map((product, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <ShoppingBag size={20} className="text-salt-deep" />
              </button>
            </div>
            <h4 className="font-bold mb-1">{product.name}</h4>
            <p className="text-salt-deep font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section id="blog" className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Latest from the Blog</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { title: "5 Other Uses for Pink Salt", date: "Mar 15, 2024", img: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=600" },
          { title: "The History of Himalayan Salt", date: "Mar 10, 2024", img: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&q=80&w=600" },
          { title: "Spring Recipes You'll Love", date: "Mar 05, 2024", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" }
        ].map((post, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
            <div className="p-8">
              <p className="text-xs text-earth/50 font-bold uppercase mb-2">{post.date}</p>
              <h4 className="text-xl font-bold mb-4">{post.title}</h4>
              <button className="text-salt-deep font-bold text-sm flex items-center gap-2">
                Read More <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-earth/70 mb-8">Have questions about the trick? We'd love to hear from you.</p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-salt-pink rounded-full flex items-center justify-center text-salt-deep">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-bold">Email Us</p>
              <p className="text-earth/60">hello@pinksaltmagic.com</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 bg-cream rounded-full flex items-center justify-center hover:bg-salt-pink transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 bg-cream rounded-full flex items-center justify-center hover:bg-salt-pink transition-colors"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 bg-cream rounded-full flex items-center justify-center hover:bg-salt-pink transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-2xl border border-salt-pink focus:outline-none focus:ring-2 focus:ring-salt-deep" />
          <input type="text" placeholder="Last Name" className="w-full px-6 py-4 rounded-2xl border border-salt-pink focus:outline-none focus:ring-2 focus:ring-salt-deep" />
        </div>
        <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border border-salt-pink focus:outline-none focus:ring-2 focus:ring-salt-deep" />
        <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 rounded-2xl border border-salt-pink focus:outline-none focus:ring-2 focus:ring-salt-deep"></textarea>
        <button className="w-full bg-earth text-white px-8 py-4 rounded-full font-bold hover:bg-salt-deep transition-all shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-earth text-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="text-2xl font-serif font-bold text-salt-pink mb-6">PinkSaltMagic</div>
          <p className="text-white/60 leading-relaxed">Transforming your kitchen, one crystal at a time. Join our community of salt enthusiasts.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-salt-pink">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#recipe" className="hover:text-white transition-colors">The Recipe</a></li>
            <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
            <li><a href="#store" className="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-salt-pink">Legal</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-salt-pink">Newsletter</h4>
          <p className="text-white/60 mb-4 text-sm">Get weekly salt tricks delivered to your inbox.</p>
          <div className="relative">
            <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-salt-pink" />
            <button className="absolute right-2 top-1.5 bg-salt-pink text-earth p-1.5 rounded-full hover:bg-white transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        © 2024 Pink Salt Magic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <Recipe />
      <Benefits />
      <Variations />
      <SocialProof />
      <FAQ />
      <LeadGen />
      <Store />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
