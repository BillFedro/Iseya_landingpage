"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: d },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
};

const chipAnim = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18, delay } },
});

function SakuraFlower({
  cx, cy, size = 1, opacity = 0.16, color = "#E85C36",
}: { cx: number; cy: number; size?: number; opacity?: number; color?: string }) {
  const r = 9 * size;
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity} fill={color}>
      <ellipse rx={r} ry={r * 0.35} transform="rotate(-30)" />
      <ellipse cx={r * 1.1} rx={r} ry={r * 0.35} transform={`rotate(30 ${r * 1.1} 0)`} />
      <ellipse cy={-r * 0.9} rx={r} ry={r * 0.35} transform={`rotate(90 0 ${-r * 0.9})`} />
      <ellipse cx={-r * 0.45} cy={r * 0.9} rx={r} ry={r * 0.35} transform={`rotate(-70 ${-r * 0.45} ${r * 0.9})`} />
      <ellipse cx={r * 1.55} cy={r * 0.9} rx={r} ry={r * 0.35} transform={`rotate(70 ${r * 1.55} ${r * 0.9})`} />
      <circle cx={r * 0.55} r={r * 0.42} />
    </g>
  );
}

function ShokupanMascot() {
  return (
    <svg
      viewBox="0 0 220 330" width="220" height="330"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Maskot roti shokupan Iseya Bakery yang lucu"
      className="drop-shadow-[0_8px_28px_rgba(232,84,122,0.18)]"
    >
      <defs>
        <radialGradient id="mg1" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#FFE8D0" />
          <stop offset="100%" stopColor="#F4C490" />
        </radialGradient>
        <radialGradient id="mg2" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5D09A" />
          <stop offset="100%" stopColor="#E8A855" />
        </radialGradient>
        <radialGradient id="mg3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB7C5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFB7C5" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="110" cy="305" rx="58" ry="9" fill="#E85C36" opacity="0.12" />

      <rect x="28" y="132" width="164" height="146" rx="24" fill="url(#mg1)" />
      <line x1="76" y1="135" x2="76" y2="274" stroke="#E8A855" strokeWidth="1" opacity="0.17" />
      <line x1="144" y1="135" x2="144" y2="274" stroke="#E8A855" strokeWidth="1" opacity="0.17" />
      <rect x="28" y="132" width="164" height="28" rx="15" fill="none" stroke="#E8A855" strokeWidth="1.5" opacity="0.38" />

      <ellipse cx="110" cy="117" rx="70" ry="40" fill="url(#mg2)" />
      <ellipse cx="110" cy="110" rx="56" ry="27" fill="#F5D09A" opacity="0.55" />

      <ellipse cx="87" cy="200" rx="13" ry="13" fill="url(#mg3)" />
      <ellipse cx="133" cy="200" rx="13" ry="13" fill="url(#mg3)" />

      <ellipse cx="96" cy="193" rx="6.5" ry="7.5" fill="#3D2B1F" />
      <ellipse cx="124" cy="193" rx="6.5" ry="7.5" fill="#3D2B1F" />
      <circle cx="98" cy="190" r="2.8" fill="#fff" />
      <circle cx="126" cy="190" r="2.8" fill="#fff" />
      <circle cx="99" cy="191" r="1.4" fill="#fff" opacity="0.65" />
      <circle cx="127" cy="191" r="1.4" fill="#fff" opacity="0.65" />

      <path d="M100 213 Q110 224 120 213" fill="none" stroke="#C47A5A" strokeWidth="2.4" strokeLinecap="round" />

      <ellipse cx="83" cy="205" rx="9" ry="5.5" fill="#FFB7C5" opacity="0.52" />
      <ellipse cx="137" cy="205" rx="9" ry="5.5" fill="#FFB7C5" opacity="0.52" />

      <path d="M37 222 Q22 222 24 242 Q24 260 37 258" fill="none" stroke="#E8A855" strokeWidth="11" strokeLinecap="round" />
      <path d="M37 222 Q22 222 24 242 Q24 260 37 258" fill="none" stroke="#F5D09A" strokeWidth="7" strokeLinecap="round" />
      <path d="M183 222 Q198 222 196 242 Q196 260 183 258" fill="none" stroke="#E8A855" strokeWidth="11" strokeLinecap="round" />
      <path d="M183 222 Q198 222 196 242 Q196 260 183 258" fill="none" stroke="#F5D09A" strokeWidth="7" strokeLinecap="round" />

      <path d="M72 274 Q90 290 110 292 Q130 290 148 274" fill="#E8A855" opacity="0.2" />

      <ellipse cx="56" cy="150" rx="10" ry="5" fill="#E8A855" opacity="0.22" transform="rotate(-10 56 150)" />
      <ellipse cx="164" cy="150" rx="10" ry="5" fill="#E8A855" opacity="0.22" transform="rotate(10 164 150)" />

      <path d="M32 108 Q36 90 62 84" fill="none" stroke="#FFB7C5" strokeWidth="1.4" strokeDasharray="3,3" opacity="0.45" />
      <circle cx="30" cy="110" r="2.8" fill="#FFB7C5" opacity="0.55" />

      <g opacity="0.2" fill="#E85C36" transform="translate(152,76)">
        <ellipse rx="8" ry="2.8" transform="rotate(-30)" />
        <ellipse cx="10" rx="8" ry="2.8" transform="rotate(30 10 0)" />
        <ellipse cy="-8" rx="8" ry="2.8" transform="rotate(90 0 -8)" />
        <ellipse cx="-4" cy="8" rx="8" ry="2.8" transform="rotate(-70 -4 8)" />
        <ellipse cx="14" cy="8" rx="8" ry="2.8" transform="rotate(70 14 8)" />
        <circle cx="5" r="3.8" />
      </g>

      <text
        x="110" y="322" textAnchor="middle"
        fontFamily="'Noto Serif JP',serif" fontSize="9"
        fill="#E85C36" opacity="0.55" letterSpacing="3"
      >
        いせやベーカリー
      </text>
    </svg>
  );
}

const stats = [
  { num: "2.400+", label: "Pelanggan Senang" },
  { num: "30+",    label: "Menu Pilihan" },
  { num: "4.9★",   label: "Rating Rata-rata" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FFF6E9" }}
    >
      {/* Decorative SVG bg — halftone + seigaiha wave + sakura accents */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1280 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      >
        <defs>
          <pattern id="halftone" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="11" cy="11" r="2.1" fill="#E85C36" />
          </pattern>
          <pattern id="seigaiha" width="64" height="32" patternUnits="userSpaceOnUse">
            <path d="M0 32 Q16 0 32 32 Q48 0 64 32" fill="none" stroke="#2F4858" strokeWidth="2" />
            <path d="M0 22 Q16 -10 32 22 Q48 -10 64 22" fill="none" stroke="#2F4858" strokeWidth="2" />
          </pattern>
        </defs>

        <rect width="1280" height="800" fill="url(#halftone)" opacity="0.10" />
        <rect y="560" width="1280" height="240" fill="url(#seigaiha)" opacity="0.10" />

        <SakuraFlower cx={1140} cy={90} opacity={0.18} />
        <SakuraFlower cx={80}   cy={620} size={0.85} opacity={0.13} color="#2F4858" />
        <SakuraFlower cx={185}  cy={145} size={0.7}  opacity={0.11} />
        <SakuraFlower cx={980}  cy={545} size={0.7}  opacity={0.10} color="#F2B134" />
        <circle cx="320" cy="60"   r="2.5" fill="#F2B134" opacity="0.30" />
        <circle cx="860" cy="185"  r="2"   fill="#2F4858" opacity="0.16" />
        <circle cx="120" cy="420"  r="3"   fill="#E85C36" opacity="0.18" />
        <circle cx="1185" cy="365" r="2.5" fill="#6B8F47" opacity="0.18" />
        <line x1="640" y1="0" x2="640" y2="800" stroke="#E85C36" strokeWidth="0.7" opacity="0.10" />
      </svg>

      {/* Perforated "tear here" line near the bottom */}
      <div className="pointer-events-none absolute bottom-12 left-0 w-full border-t-2 border-dashed border-[#E85C36]/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-start">

            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 bg-[#FFF6E9] border-2 border-dashed border-[#E85C36] text-[#C8431F] text-[10px] font-bold tracking-widest px-4 py-2 rounded-md mb-5 shadow-sm -rotate-2">
                <span className="w-2 h-2 rounded-full bg-[#E85C36] flex-shrink-0 inline-block" />
                TOKO ROTI JEPANG ARTISAN
              </span>
            </motion.div>

            <motion.p
              custom={0.08} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[12px] font-bold tracking-[0.22em] text-[#5C7A8A] mb-1"
              style={{ fontFamily: "'Noto Serif JP','Hiragino Mincho ProN',serif" }}
            >
              イセヤベーカリー
            </motion.p>

            <motion.div custom={0.12} variants={fadeUp} initial="hidden" animate="visible">
              <p className="text-[20px] font-black tracking-tight text-[#2A1B12] mb-1"
                style={{ fontFamily: "'Noto Serif JP',serif" }}>
                Iseya <span className="text-[#E85C36]">Bakery</span>
              </p>
            </motion.div>

            <motion.h1
              custom={0.18} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl font-black leading-[1.12] tracking-tight mb-4 text-[#2A1B12]"
            >
              Roti Fresh{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 -rotate-1 bg-[#F2B134] rounded-sm -z-10" />
                <span className="relative">Setiap Hari</span>
              </span>
              {" "}dengan Cinta
            </motion.h1>

            <motion.p
              custom={0.25} variants={fadeUp} initial="hidden" animate="visible"
              className="text-sm leading-[1.8] text-[#8A6F58] mb-8 max-w-[330px]"
            >
              Dibuat dengan teknik tradisional Jepang — shokupan lembut,
              pastri bertekstur mochi, dan kreasi musiman. Tanpa pengawet,
              hanya bahan alami terbaik yang dipanggang segar setiap hari.
            </motion.p>

            <motion.div
              custom={0.40} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap items-center gap-5"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-5">
                  {i > 0 && <div className="w-px h-9 bg-[#F0DAB8] hidden sm:block" />}
                  <div className="text-center">
                    <p className="text-[20px] font-black text-[#2A1B12] leading-none">{s.num}</p>
                    <p className="text-[10px] text-[#8A6F58] mt-0.5 tracking-wide">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div variants={fadeRight} initial="hidden" animate="visible" className="relative">

              {/* Chip: Alami */}
              <motion.div
                variants={chipAnim(0.9)} initial="hidden" animate="visible"
                className="absolute -top-4 -right-2 sm:-right-6 z-10
                           bg-[#F2B134] border-2 border-dashed border-[#2A1B12]/25 rounded-xl px-3 py-2
                           flex items-center gap-2 shadow-[0_5px_14px_rgba(0,0,0,0.14)]
                           text-[10px] font-bold text-[#2A1B12] rotate-3"
                style={{ animation: "ibchip 3s ease-in-out infinite 0.5s" }}
              >
                <span className="text-[15px]">🌿</span>
                <div>
                  <p className="leading-none">100% Alami</p>
                  <p className="text-[#5C4A30] font-normal leading-tight mt-0.5">Tanpa Pengawet</p>
                </div>
              </motion.div>

              {/* Chip: Rating */}
              <motion.div
                variants={chipAnim(1.1)} initial="hidden" animate="visible"
                className="absolute top-[155px] -left-4 sm:-left-10 z-10
                           bg-[#2F4858] border-2 border-dashed border-white/25 rounded-xl px-3 py-2
                           flex items-center gap-2 shadow-[0_5px_14px_rgba(0,0,0,0.20)]
                           text-[10px] font-bold text-[#FFF6E9] -rotate-3"
              >
                <span className="text-amber-300 tracking-tight">★★★★★</span>
                <div>
                  <p className="leading-none">Rating 4.9</p>
                  <p className="text-[#FFF6E9]/70 font-normal leading-tight mt-0.5">2.400+ ulasan</p>
                </div>
              </motion.div>

              {/* Sunburst behind mascot (replaces soft glow) */}
              <svg
                className="absolute inset-0 opacity-[0.18]"
                viewBox="0 0 220 330" aria-hidden="true"
                style={{ animation: "ibspin 60s linear infinite" }}
              >
                <g transform="translate(110,165)">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <rect
                      key={i} x={-3} y={-170} width={6} height={170}
                      fill={i % 2 === 0 ? "#E85C36" : "#F2B134"}
                      transform={`rotate(${i * 22.5})`}
                    />
                  ))}
                </g>
              </svg>

              {/* Mascot float */}
              <div style={{ animation: "ibfloat 3.6s ease-in-out infinite" }}>
                <ShokupanMascot />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A6F58]"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Gulir</span>
        <motion.div
          animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom,#E85C36,transparent)" }}
        />
      </motion.div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes ibfloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-11px)} }
        @keyframes ibchip  { 0%,100%{transform:translateY(0) rotate(3deg)} 50%{transform:translateY(-5px) rotate(3deg)}  }
        @keyframes ibspin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}