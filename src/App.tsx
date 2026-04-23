/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  UtensilsCrossed, 
  Truck, 
  ShoppingBag, 
  Trees, 
  CalendarCheck, 
  Facebook,
  IceCream,
  Users,
  Quote,
  Star,
  ChevronRight
} from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/663373599_122176569140885445_9086722598325934592_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UTlUc3Kv6UEQ7kNvwFAZHfQ&_nc_oc=AdorL8iDc9boP31a0jPJUXU23ptafvvmFyVjqN6WRfLYBwcNRCngd74Cy1nPB_thrjg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=qMFME5zMjkWUv0sGq0Ye-g&_nc_ss=7b2a8&oh=00_Af0t5skY2YlkXYz3dXdCsVPJrKhHKmsA_45gfM-zV7jAKg&oe=69EFA305",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/666626384_122176567952885445_7941357288469048631_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lTJQBa-ad9kQ7kNvwG7YDuh&_nc_oc=AdoXyjJRffj9x8ReEmtlTH7dsO04vqXozEkxdMxS2Wy6L6CJn1AOc4QVh8dIUtU6heA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=QphKRdkGCy4wJuw-J67QCQ&_nc_ss=7b2a8&oh=00_Af125x0KPMicaMvpBmHJGpuHR5lxF_muk9Q43O5pDQwz5Q&oe=69EF74DC",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/654965134_122174497328885445_6846671996062731403_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=skkH9Y6c8KcQ7kNvwGSvpPD&_nc_oc=AdoUtHWWPBXs-uglaOX9t_az4SW-LqeWC5XKCfBtVFEKPf4dqW5ht3y-V2A7Hd7S7gw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=lbW_0_hLMg-yi0s4F5upYA&_nc_ss=7b2a8&oh=00_Af2B3vQDVxJExhVcU6Fz7qUYfK_LXMj7G5hNGObC5LfM0A&oe=69EF848D",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/657061246_122174342780885445_4668559971220958302_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=esMsxMQdxC4Q7kNvwEFhOK1&_nc_oc=AdpMVwnKvgFMMcfX-rUQDKz2zLtRxQIdJbU5PYsCOglTuSyByeWc6fq4REnDbjIhaxo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=DsnLo33Prw8amap-vEUE8w&_nc_ss=7b2a8&oh=00_Af1qjEbwiqvvBOfxjL-43bN03y-hNShPl-7dshyjojWLvw&oe=69EFA88D",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/651186639_122172982916885445_7418419721420904397_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=4k2npdmL82UQ7kNvwGjpN1D&_nc_oc=Adq3rEUHyomASsDyhFEnUAFZJQbJeFoO8hg_S3OnFeLNnc383gmTNhCHSeVfm-XT5Oo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=EmuZEcvOd_zk4MbWk0X9-g&_nc_ss=7b2a8&oh=00_Af1FWb6Bwl8x4m7LddGXPdENjZSStVHuyMoDQsafuMo8nQ&oe=69EF9A36",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/653702828_122172982760885445_2537764531187117560_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=B-C8pZ8UnswQ7kNvwE0y6om&_nc_oc=Adov_4P2Yq8oW1fzKNzxm_QnHfWeEaSm4g6KJhSERhT-E1BnVVj-LTievmHyiTHxa5Y&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=rxG-hEntUrk15i2SKU9Dcw&_nc_ss=7b2a8&oh=00_Af0m8I-Xp_brpVFCaICaExR2blOhYrcfYbnDWjBNic_S_w&oe=69EF8570",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/633301439_122168369402885445_4149370263548624124_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=3JRwRm_PQ4kQ7kNvwHshbRJ&_nc_oc=Adrfxpce_THcrwAfxWYeKIqHu5UoNzlk-mXvKpU_s0b9H1bgtbAAh4YhME6zbf2mQxE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=b3Qv-EBaqnBg9fPCzULm3w&_nc_ss=7b2a8&oh=00_Af3tHfjvpM5ak49LxEec47N_1TemPrYctBWfgAX2gQztkg&oe=69EF8E0E",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/624316135_122166885974885445_7944686410644583564_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=cPvvoEvTZ3gQ7kNvwF6B3Q5&_nc_oc=Adr01E0mBJBofBY-k9CRpEM6EVueTHjXzR1YqVpZh2kZSqUHJo0zKZGMQKC2bmmUyJE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=V8IiUBnH-_8WVIF1lmRNdQ&_nc_ss=7b2a8&oh=00_Af0mp6WMJ-qb1cL1tJGybqLUzvZVWNuiu21lDcGG3oUqeA&oe=69EFA92E"
];

const FULL_MENU = [
  { category: "Zupy", items: [
    { name: "Rosół z makaronem", desc: "Gotowany na trzech rodzajach mięs", price: "18 zł" },
    { name: "Żurek biesiadny", desc: "Na własnym zakwasie z jajkiem i białą kiełbasą", price: "22 zł" }
  ]},
  { category: "Dania Główne", items: [
    { name: "Kotlet Schabowy", desc: "Z ziemniakami i kapustą zasmażaną", price: "42 zł" },
    { name: "Rolada Śląska", desc: "Z kluskami i modrą kapustą", price: "24 zł" },
    { name: "Pierogi Ręcznie Lepione", desc: "Ruskie lub z mięsem, okraszone cebulką", price: "24 zł" }
  ]},
  { category: "Desery", items: [
    { name: "Lody Gałkowe", desc: "Smaki rzemieślnicze (3 gałki)", price: "15 zł" },
    { name: "Szarlotka na ciepło", desc: "Z gałką lodów waniliowych", price: "20 zł" }
  ]}
];

const REVIEWS = [
  { name: "Marek K.", text: "Prawdziwe domowe jedzenie. Schabowy ogromny i pyszny!", stars: 5 },
  { name: "Anna S.", text: "Najlepsze lody w Zebrzydowicach. Miła obsługa i super klimat.", stars: 5 },
  { name: "Piotr W.", text: "Catering na chrzciny był rewelacyjny. Goście byli zachwyceni.", stars: 5 }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-editorial-bg text-editorial-ink selection:bg-orange-100 flex flex-col items-center overflow-x-hidden">
      
      {/* 1. PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-editorial-accent z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 2. STICKY LAYOUT WRAPPER */}
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] min-h-screen border-x border-[#EAE8E4] bg-white relative">
        
        {/* LEFT COLUMN */}
        <div className="p-8 md:p-16 flex flex-col justify-between border-r border-[#EAE8E4]">
          <header className="relative z-10">
            <motion.div 
              initial={{ rotate: -5, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              className="flex items-center gap-3 mb-12"
            >
              <img 
                src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/536276212_122133677726885445_847201227076834149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=goHC-7qkoZUQ7kNvwGYqmEJ&_nc_oc=AdoFHy4LPZNYkT1YVjGEuP5RD2I5sXY1BIql1u6WNgrdspMswFJbm7ILBf0nnv5yno0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=HxhSTnLSDGt-5Lp2ba54CQ&_nc_ss=7b2a8&oh=00_Af1o4LEHnsOMXYV7RPnEZWdsGT0wmhIcFq9WTYvhWHZDrA&oe=69EF8F67" 
                className="w-12 h-12 rounded-full border border-editorial-accent shadow-lg"
                alt="Logo"
              />
              <span className="font-serif text-2xl lowercase italic text-editorial-accent">nowy zajazd</span>
            </motion.div>

            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="mt-12"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6 font-sans flex items-center gap-2">
                <span className="w-12 h-[1px] bg-gray-300" /> Wkrótce otwarcie
              </p>
              <h1 className="text-8xl md:text-[140px] leading-[0.75] font-serif tracking-tighter">
                Nowy<br />
                <span className="text-editorial-accent italic ml-8 md:ml-20">Zajazd</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-serif italic text-2xl md:text-3xl text-gray-500 mt-12 max-w-xl leading-relaxed"
              >
                "Smak, który przywołuje najpiękniejsze wspomnienia domowego ogniska."
              </motion.p>
            </motion.div>
          </header>

          <footer className="mt-32">
            <motion.div 
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              viewport={{ once: true }}
              className="relative bg-editorial-bg border border-editorial-accent p-10 rounded-sm shadow-sm mb-16 group"
            >
              {/* Background Icon Container */}
              <div className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <UtensilsCrossed size={120} />
                </div>
              </div>

              {/* Price Tag (Outside overflow container) */}
              <div className="absolute -top-10 -right-10 bg-editorial-accent text-white w-28 h-28 rounded-full flex flex-col items-center justify-center font-black text-3xl rotate-12 shadow-[0_20px_50px_rgba(139,69,19,0.3)] border-4 border-white/20 group-hover:rotate-0 transition-all duration-500 group-hover:scale-110 z-10">
                <span>29</span>
                <span className="text-[10px] uppercase tracking-widest -mt-1 opacity-80">zł</span>
              </div>
              <h3 className="text-3xl mb-6 italic border-b border-editorial-accent pb-2 inline-block">Danie Dnia</h3>
              <div className="space-y-4 text-xl">
                <div className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-editorial-accent" />
                  <p className="font-bold">Bigos z chlebem lub ziemniakami</p>
                </div>
                <p className="text-gray-500 ml-8 text-lg italic">Pączek + Kompot domowy</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: <Truck size={16} />, label: "Dostawa" },
                { icon: <ShoppingBag size={16} />, label: "Na wynos" },
                { icon: <UtensilsCrossed size={16} />, label: "Restauracja" },
                { icon: <Trees size={16} />, label: "Ogródek" },
                { icon: <CalendarCheck size={16} />, label: "Eventy" }
              ].map((s, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -3 }}
                  className="border border-gray-100 p-4 rounded-sm flex flex-col items-center justify-center gap-3 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:border-editorial-accent hover:text-editorial-accent transition-all cursor-default"
                >
                  {s.icon}
                  {s.label}
                </motion.div>
              ))}
            </div>
          </footer>
        </div>

        {/* RIGHT COLUMN (STICKY INFO) */}
        <div className="bg-editorial-pane relative">
          <div className="sticky top-0 h-screen flex flex-col justify-between p-8 md:p-16">
            <div className="space-y-16">
              {/* HOURS */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <h4 className="text-xs uppercase tracking-[0.3em] text-editorial-accent font-black mb-8 flex items-center gap-4">
                  <Clock size={14} /> Godziny Otwarcia
                </h4>
                <div className="space-y-4 group">
                  <div className="flex justify-between items-end border-b border-[#D1CDC7] pb-3 hover:border-editorial-accent transition-colors">
                    <span className="italic font-serif text-lg">Poniedziałek — Czwartek</span>
                    <span className="font-bold font-sans text-xs tracking-tighter">12:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-[#D1CDC7] pb-3 hover:border-editorial-accent transition-colors">
                    <span className="italic font-serif text-lg">Piątek — Niedziela</span>
                    <span className="font-bold font-sans text-xs tracking-tighter">12:00 - 20:00</span>
                  </div>
                </div>
              </motion.div>

              {/* CONTACT */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xs uppercase tracking-[0.3em] text-editorial-accent font-black mb-8 flex items-center gap-4">
                  <Phone size={14} /> Kontakt
                </h4>
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-[10px] uppercase text-gray-400 mb-1 tracking-widest">Rezerwacje</p>
                    <a href="tel:501854821" className="text-4xl md:text-5xl font-serif text-editorial-ink hover:text-editorial-accent transition-colors tracking-tighter">501 854 821</a>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600 italic text-lg leading-snug pt-4 border-t border-[#D1CDC7]">
                    <MapPin size={20} className="text-editorial-accent mt-1 shrink-0" />
                    <span>ul. Juliusza Słowackiego 33i,<br />Zebrzydowice</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="pt-8"
            >
              <a 
                href="https://www.facebook.com/profile.php?id=61576563365342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-16 flex items-center justify-center gap-4 bg-editorial-ink text-white hover:bg-editorial-accent transition-all font-bold uppercase tracking-widest text-xs group"
              >
                <Facebook size={18} className="group-hover:scale-125 transition-transform" />
                Obserwuj nasze nowości
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- SECTION: OUR STORY --- */}
      <section className="w-full bg-white py-32 border-b border-[#EAE8E4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-20 -left-10 text-[240px] font-serif text-gray-50 leading-none pointer-events-none select-none">
                Z
              </div>
              <h2 className="text-5xl md:text-7xl font-serif italic relative mb-12">Nasza Pasja,<br />Twoje Wspomnienia</h2>
              <div className="space-y-6 text-gray-600 text-xl leading-relaxed max-w-lg">
                <p>
                  <span className="text-4xl font-serif text-editorial-accent float-left mr-3 leading-none mt-2">D</span>
                  laczego Nowy Zajazd? Bo wierzymy, że jedzenie to coś więcej niż kalorie. To chwile spędzone z bliskimi, powrót do smaków dzieciństwa i autentyczność, którą czuć w każdym kęsie.
                </p>
                <p>
                  Codziennie od rana nasza kuchnia budzi się do życia, by przygotować dla Państwa dania oparte na lokalnych składnikach. Od legendarnych schabowych, przez rzemieślnicze lody, aż po pyszny, domowy kompot.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-sm overflow-hidden shadow-2xl"
            >
              <img src={IMAGES[3]} className="w-full h-full object-cover" alt="Klimat Zajazdu" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION: FULL MENU --- */}
      <section id="menu" className="w-full bg-editorial-pane py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-serif italic mb-6">Zasmakuj w Tradycji</h2>
            <div className="flex items-center justify-center gap-6">
              <span className="w-16 h-[1px] bg-editorial-accent" />
              <p className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold font-sans">Karta Menu</p>
              <span className="w-16 h-[1px] bg-editorial-accent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {FULL_MENU.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h3 className="text-sm uppercase tracking-[0.3em] font-black font-sans text-editorial-accent mb-12 border-b border-[#D1CDC7] pb-4">
                    {cat.category}
                  </h3>
                  <div className="space-y-10">
                    {cat.items.map((item, j) => (
                      <div key={j} className="group cursor-default">
                        <div className="flex justify-between items-baseline gap-4 mb-2">
                          <span className="font-serif text-xl italic group-hover:text-editorial-accent transition-colors">{item.name}</span>
                          <span className="w-12 h-[1px] bg-gray-200 grow group-hover:bg-editorial-accent transition-all" />
                          <span className="font-bold text-sm tracking-tighter">{item.price}</span>
                        </div>
                        <p className="text-gray-400 text-xs italic text-left">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: REVIEWS --- */}
      <section className="w-full bg-editorial-ink py-32 text-[#FAF9F6] relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <Quote size={200} fill="currentColor" />
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col items-center gap-16">
            <h2 className="text-4xl md:text-6xl font-serif italic text-center">Co mówią nasi goście</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map((r, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-sm backdrop-blur-sm"
                >
                  <div className="flex gap-1 text-editorial-accent mb-6">
                    {[...Array(r.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-serif italic text-lg mb-8 leading-relaxed">"{r.text}"</p>
                  <p className="text-[10px] uppercase tracking-widest font-black opacity-50">{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY 2.0 --- */}
      <section id="galeria" className="w-full bg-white py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-4 leading-none">Momenty.</h2>
              <p className="text-gray-400 uppercase tracking-[0.4em] text-xs font-bold font-sans">Kolekcja kulinarna</p>
            </div>
            <a 
              href="https://www.facebook.com/profile.php?id=61576563365342" 
              className="text-editorial-accent text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2"
            >
              Zobacz więcej na FB <ChevronRight size={16} />
            </a>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotate: idx % 2 === 0 ? 0.5 : -0.5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="break-inside-avoid relative group cursor-zoom-in rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <img src={img} alt={`Dish ${idx}`} className="w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
                <div className="absolute inset-0 bg-editorial-accent/0 group-hover:bg-editorial-accent/5 transition-colors" />
                <div className="absolute inset-0 border-0 group-hover:border-8 border-white/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-gradient-to-t from-black/40 to-transparent">
                  <span className="text-white text-[10px] uppercase tracking-widest font-bold">Nowy Zajazd — Wybór Szefa</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAP INTEGRATION --- */}
      <section className="w-full h-[600px] bg-editorial-pane relative contrast-[1.1] opacity-90 hover:opacity-100 transition-all duration-1000 border-y border-[#EAE8E4]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.482048188657!2d18.600018912761325!3d49.88975267137166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ab2fab76382d%3A0xb664e45bc74de021!2sJuliusza%20S%C5%82owackiego%2033I%2C%2043-410%20Zebrzydowice!5e0!3m2!1spl!2spl!4v1776925192679!5m2!1spl!2spl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-full shadow-2xl border border-editorial-accent animate-pulse">
            <MapPin size={40} className="text-editorial-accent" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-editorial-bg py-32 border-t border-[#EAE8E4]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <span className="font-serif italic text-4xl text-editorial-accent leading-none">nowy zajazd</span>
            <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest font-bold font-sans">Zebrzydowice</p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] uppercase font-black tracking-[0.5em] text-gray-300">Odwiedź nas</h4>
            <p className="font-serif italic text-2xl text-gray-600 max-w-sm">
              Czekamy na Państwa od 1 czerwca 2025 roku z najsmaczniejszą kuchnią w regionie.
            </p>
          </div>
          <div className="md:col-span-1 flex flex-col justify-between">
            <p className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">© {new Date().getFullYear()} — Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-4 mt-8">
              <a href="https://facebook.com" className="text-editorial-ink hover:text-editorial-accent transition-colors"><Facebook size={16} /></a>
              <a href="tel:501854821" className="text-editorial-ink hover:text-editorial-accent transition-colors"><Phone size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
