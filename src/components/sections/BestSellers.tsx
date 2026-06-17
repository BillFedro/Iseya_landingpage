"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";

const bestSellers = products.filter((p) => p.badge === "Best Seller").concat(
  products.filter((p) => p.badge !== "Best Seller").slice(0, 2)
);

export default function BestSellers() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? bestSellers.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === bestSellers.length - 1 ? 0 : c + 1));
  };

  const visible = [
    bestSellers[current],
    bestSellers[(current + 1) % bestSellers.length],
    bestSellers[(current + 2) % bestSellers.length],
  ];

  return (
    <section
      id="best-sellers"
      className="section-padding"
      style={{ background: "radial-gradient(ellipse at 80% 50%, #FFF0F4 0%, #FFFFFF 55%)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.22em] text-[#FFB7C5] mb-1"
              style={{ fontFamily: "'Noto Serif JP',serif" }}
            >
              ベストセラー
            </p>
            <span className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#FFB7C5] text-[#B83060] text-[10px] font-bold tracking-widest px-4 py-2 rounded-full shadow-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8547A] inline-block" />
              PENJUAL TERBAIK
            </span>
            <h2 className="section-title text-[#1A0E14]">
              Favorit <span className="text-[#E8547A]">Pelanggan</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Sebelumnya"
              className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#FFD6E0]
                         hover:border-[#E8547A] hover:bg-[#FFF0F4]
                         flex items-center justify-center transition-all group"
            >
              <ChevronLeft size={18} className="text-[#A07080] group-hover:text-[#E8547A] transition-colors" />
            </button>
            <button
              onClick={next}
              aria-label="Berikutnya"
              className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#FFD6E0]
                         hover:border-[#E8547A] hover:bg-[#FFF0F4]
                         flex items-center justify-center transition-all group"
            >
              <ChevronRight size={18} className="text-[#A07080] group-hover:text-[#E8547A] transition-colors" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((product, idx) => (
              <motion.div
                key={`${product.id}-${current}-${idx}`}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group bg-white rounded-3xl overflow-hidden border-[1.5px] border-[#FFD6E0]
                           shadow-sm hover:shadow-[0_8px_28px_rgba(232,84,122,0.14)] transition-all"
              >
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-white text-[9px] font-bold px-2.5 py-1 rounded-full"
                        style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-[#1A0E14] text-base">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-[#FFF8E1] border border-amber-200 px-2 py-0.5 rounded-full shrink-0">
                      <Star size={11} className="text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-bold text-amber-600">5.0</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#7A5060] mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-[#E8547A]">
                      {product.priceFormatted}
                    </span>
                    <button
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold
                                 shadow-[0_4px_12px_rgba(232,84,122,0.24)]
                                 hover:-translate-y-0.5 active:scale-95 transition-all"
                      style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
                    >
                      <ShoppingBag size={13} />
                      Pesan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {bestSellers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current
                  ? "w-6 bg-[#E8547A]"
                  : "w-2 bg-[#FFD6E0] hover:bg-[#FFB7C5]"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
