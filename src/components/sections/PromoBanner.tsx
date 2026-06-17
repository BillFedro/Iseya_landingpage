"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tag, ShoppingBag, ArrowRight } from "lucide-react";
import { SakuraFlower } from "@/components/ui/SakuraFlower";

const TARGET_DATE = new Date("2026-07-31T23:59:59");

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const jpLabels: Record<string, string> = {
  Hari: "日",
  Jam: "時",
  Menit: "分",
  Detik: "秒",
};

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px]">
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden relative">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 28, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-2xl sm:text-3xl font-extrabold text-white absolute"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase mt-1.5">
        {label}
      </span>
      <span
        className="text-white/40 text-[9px] mt-0.5"
        style={{ fontFamily: "'Noto Serif JP',serif" }}
      >
        {jpLabels[label]}
      </span>
    </div>
  );
}

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section id="promo" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
          style={{ background: "linear-gradient(135deg,#E8547A 0%,#C03060 100%)" }}
        >
          {/* Sakura decorations (white) */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 900 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
          >
            <SakuraFlower cx={820} cy={40}  size={1.1} opacity={0.12} fill="white" />
            <SakuraFlower cx={50}  cy={300} size={0.9} opacity={0.09} fill="white" />
            <SakuraFlower cx={440} cy={340} size={0.7} opacity={0.06} fill="white" />
            <circle cx="100" cy="60"  r="2" fill="white" opacity="0.18" />
            <circle cx="800" cy="280" r="2" fill="white" opacity="0.14" />
            <circle cx="450" cy="20"  r="1.5" fill="white" opacity="0.12" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full mb-5">
                <Tag size={11} />
                PENAWARAN SPESIAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
                Diskon 20% untuk<br />Pesanan Pertamamu!
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                Baru di Iseya? Gunakan kode di bawah ini dan nikmati diskon 20%
                untuk seluruh pesanan pertamamu. Segar, premium, dan kini lebih terjangkau.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-7">
                <div className="bg-white/20 border border-white/40 backdrop-blur-sm rounded-xl px-4 py-2.5">
                  <span className="text-white font-mono font-black tracking-wider text-base">
                    ISEYA20
                  </span>
                </div>
                <span
                  className="text-white/60 text-[11px]"
                  style={{ fontFamily: "'Noto Serif JP',serif" }}
                >
                  — masukkan saat checkout
                </span>
              </div>
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white font-black text-sm
                           text-[#C03060] shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                           hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                           active:scale-95 transition-all"
              >
                <ShoppingBag size={15} />
                Pesan Sekarang
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right — countdown */}
            <div className="flex flex-col items-start lg:items-end">
              <p
                className="text-white/60 text-[11px] font-bold mb-5 tracking-[0.15em]"
                style={{ fontFamily: "'Noto Serif JP',serif" }}
              >
                Penawaran berakhir dalam:
              </p>
              <div className="flex items-end gap-2 sm:gap-3">
                <CountdownBox value={timeLeft.days}    label="Hari" />
                <span className="text-white/40 text-2xl font-bold pb-7">:</span>
                <CountdownBox value={timeLeft.hours}   label="Jam" />
                <span className="text-white/40 text-2xl font-bold pb-7">:</span>
                <CountdownBox value={timeLeft.minutes} label="Menit" />
                <span className="text-white/40 text-2xl font-bold pb-7">:</span>
                <CountdownBox value={timeLeft.seconds} label="Detik" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
