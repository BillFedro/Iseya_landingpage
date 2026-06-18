"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { SakuraFlower } from "@/components/ui/SakuraFlower";
import { products } from "@/data/products";
import { Product } from "@/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TAPE_COLORS = ["#D98E94", "#8FA77B", "#E3B23C"];
const ROTATIONS = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3", "rotate-1"];
const LIFTS = ["mt-0", "mt-8", "mt-3", "mt-10", "mt-1", "mt-6"];

function ProductCard({
  product,
  featured = false,
  rotateClass = "",
  liftClass = "",
  tape = "#D98E94",
}: {
  product: Product;
  featured?: boolean;
  rotateClass?: string;
  liftClass?: string;
  tape?: string;
}) {
  return (
    <div className={`${rotateClass} ${liftClass} ${featured ? "sm:col-span-2" : ""}`}>
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -8, transition: { duration: 0.25 } }}
        className="group relative bg-[#FFFDF8] p-3 pb-4 border border-[#E8D9BE]
                   shadow-[0_6px_18px_rgba(74,55,43,0.12)] hover:shadow-[0_14px_30px_rgba(74,55,43,0.20)]
                   transition-shadow"
      >
        {/* washi tape */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 rotate-[-4deg] opacity-90 rounded-[2px]"
          style={{ background: tape }}
        />

        {/* photo */}
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-square"}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {product.badge && (
            <span
              className="absolute top-2 left-2 text-[8px] font-bold text-white px-2 py-0.5 rounded-sm rotate-[-3deg]"
              style={{ background: product.badge === "Best Seller" ? "#D98E94" : "#8FA77B" }}
            >
              {product.badge}
            </span>
          )}

          {/* price sticker */}
          <div
            className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full flex items-center justify-center
                       text-[10px] font-black text-[#4A372B] border-2 border-white shadow-md rotate-[6deg]"
            style={{ background: "#E3B23C" }}
          >
            {product.priceFormatted}
          </div>

          {/* add to cart */}
          <button
            className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                       transition-all shadow-md text-[#4A372B]"
            aria-label="Tambah ke keranjang"
          >
            <ShoppingBag size={14} />
          </button>
        </div>

        {/* caption */}
        <div className="pt-4 px-1">
          <h3 className={`font-bold text-[#4A372B] truncate ${featured ? "text-base" : "text-sm"}`}>
            {product.name}
          </h3>
          <p className="text-xs text-[#8A7560] mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <span className="inline-block mt-2 text-[9px] text-[#8A7560] capitalize border-b border-dashed border-[#E8D9BE]">
            {product.category}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section
      id="menu"
      className="relative section-padding overflow-hidden"
      style={{ background: "#FBF3E7" }}
    >
      {/* paper grain + scattered tape scraps */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(#E8D9BE 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />
      <div className="pointer-events-none absolute top-10 right-10 w-16 h-7 rotate-12 opacity-20" style={{ background: "#D98E94" }} />
      <div className="pointer-events-none absolute bottom-16 left-12 w-14 h-6 -rotate-6 opacity-20" style={{ background: "#8FA77B" }} />

      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      >
        <SakuraFlower cx={1160} cy={120} size={0.9} opacity={0.10} color="#D98E94" />
        <SakuraFlower cx={60}   cy={800} size={0.75} opacity={0.08} color="#8FA77B" />
        <SakuraFlower cx={600}  cy={880} size={0.6}  opacity={0.06} color="#D98E94" />
      </svg>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-[10px] font-bold tracking-[0.22em] text-[#6B8557] mb-2"
            style={{ fontFamily: "'Noto Serif JP',serif" }}
          >
            メニュー
          </p>
          <span className="inline-block bg-[#F6DFA0] text-[#4A372B] text-[10px] font-bold tracking-widest px-4 py-2 rounded-sm shadow-[0_3px_8px_rgba(74,55,43,0.18)] -rotate-2 mb-5">
            MENU KAMI
          </span>
          <h2 className="section-title text-[#4A372B] mb-4">
            Produk{" "}
            <span className="relative inline-block text-[#D98E94]">
              Unggulan
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 160 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9 Q40 1 80 9 T158 9" fill="none" stroke="#8FA77B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="section-subtitle text-[#8A7560] mx-auto">
            Dibuat dengan tangan setiap hari menggunakan bahan premium Jepang.
            Setiap gigitan adalah cerita tradisi dan penuh kasih.
          </p>
        </motion.div>

        {/* Grid — asymmetric, first item featured, rest staggered like pinned polaroids */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14 items-start"
        >
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={i === 0}
              rotateClass={i === 0 ? "" : ROTATIONS[i % ROTATIONS.length]}
              liftClass={i === 0 ? "" : LIFTS[i % LIFTS.length]}
              tape={TAPE_COLORS[i % TAPE_COLORS.length]}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm border-2 border-dashed border-[#4A372B]
                       text-[#4A372B] text-sm font-bold hover:bg-[#4A372B] hover:text-[#FBF3E7] transition-colors"
          >
            Lihat Semua Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}