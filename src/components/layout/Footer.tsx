"use client";

import { useState } from "react";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

function BreadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9C3 7 5 5 12 5C19 5 21 7 21 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="9" width="18" height="10" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="3" y="9" width="18" height="10" rx="3" stroke="white" strokeWidth="2" />
      <line x1="9"  y1="9" x2="9"  y2="19" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="15" y1="9" x2="15" y2="19" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}

const quickLinks = [
  { label: "Menu",        href: "#menu" },
  { label: "Tentang Kami", href: "#why-us" },
  { label: "Galeri",      href: "#gallery" },
  { label: "Promo",       href: "#promo" },
  { label: "Kontak",      href: "#footer" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Twitter,   href: "#", label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer id="footer" className="bg-[#1A0E14] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div
                className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0
                           shadow-[0_4px_12px_rgba(232,84,122,0.35)]
                           group-hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
              >
                <BreadIcon />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-black tracking-tight text-white">
                  Iseya<span className="text-[#E8547A]">.</span>
                </span>
                <span
                  className="text-[9px] font-bold tracking-[.18em] text-[#E8547A]/60 mt-0.5"
                  style={{ fontFamily: "'Noto Serif JP',serif" }}
                >
                  イセヤベーカリー
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Toko roti Jepang artisan yang menyajikan pastri dan roti
              segar buatan tangan setiap hari. Rasakan bedanya kualitas.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-[10px] bg-white/5 border border-white/10
                             hover:bg-[#E8547A] hover:border-[#E8547A]
                             flex items-center justify-center transition-all group"
                >
                  <Icon size={15} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#E8547A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#E8547A] mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  Jl. Bakery Premium No. 12,<br />Jakarta Selatan, 12190
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#E8547A] shrink-0" />
                <a href="tel:+62811234567" className="text-sm text-slate-400 hover:text-[#E8547A] transition-colors">
                  +62 811-234-567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#E8547A] shrink-0" />
                <a href="mailto:hello@iseyabakery.com" className="text-sm text-slate-400 hover:text-[#E8547A] transition-colors">
                  hello@iseyabakery.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Dapatkan promo terbaru dan menu baru langsung di kotak masukmu.
            </p>
            {subscribed ? (
              <div className="bg-[#E8547A]/15 border border-[#E8547A]/30 rounded-2xl p-3.5 text-sm text-[#FFB7C5] text-center">
                Terima kasih sudah berlangganan! 🎉
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <Input
                  type="email"
                  placeholder="emailmu@contoh.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#E8547A] rounded-xl"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
                             text-white text-sm font-bold
                             shadow-[0_4px_12px_rgba(232,84,122,0.28)]
                             hover:-translate-y-0.5 hover:shadow-[0_7px_18px_rgba(232,84,122,0.38)]
                             active:scale-95 transition-all"
                  style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
                >
                  <Send size={13} />
                  Langganan
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © 2026 Iseya Bakery. Semua hak dilindungi.
          </p>
          <p className="text-sm text-slate-500">
            Dibuat dengan ❤️ di Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
