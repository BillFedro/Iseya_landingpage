"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { SakuraFlower } from "@/components/ui/SakuraFlower";
import { products } from "@/data/products";
import { Product } from "@/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProductCard({ product }: { product: Product }) {
  const badgeStyle =
    product.badge === "Best Seller"
      ? { background: "linear-gradient(135deg,#E8547A,#C03060)", className: "text-white" }
      : product.badge === "New"
      ? { background: "linear-gradient(135deg,#34d399,#059669)", className: "text-white" }
      : null;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white rounded-3xl overflow-hidden border-[1.5px] border-[#FFD6E0]
                 shadow-sm hover:shadow-[0_8px_28px_rgba(232,84,122,0.14)] transition-all"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badgeStyle && (
          <div className="absolute top-3 left-3">
            <span
              className={`${badgeStyle.className} text-[9px] font-bold px-2.5 py-1 rounded-full`}
              style={{ background: badgeStyle.background }}
            >
              {product.badge}
            </span>
          </div>
        )}
        {/* Add to cart overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-bold
                       shadow-[0_4px_12px_rgba(232,84,122,0.28)] active:scale-95 transition-all"
            style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
          >
            <ShoppingBag size={13} />
            Tambah ke Keranjang
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-sm text-[#1A0E14] mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-xs text-[#7A5060] mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-black text-[#E8547A]">
            {product.priceFormatted}
          </span>
          <span className="text-[10px] text-[#A07080] capitalize bg-[#FFF0F4] border border-[#FFD6E0] px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  return (
    <section
      id="menu"
      className="relative section-padding overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 30% 80%, #FFF0F4 0%, #FFFFFF 60%)" }}
    >
      {/* Decorative bg */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      >
        <SakuraFlower cx={1160} cy={120} size={0.9} opacity={0.1} />
        <SakuraFlower cx={60}   cy={800} size={0.75} opacity={0.08} />
        <SakuraFlower cx={600}  cy={880} size={0.6}  opacity={0.06} />
        <circle cx="200" cy="150" r="2" fill="#FFB7C5" opacity="0.22" />
        <circle cx="1100" cy="700" r="2.5" fill="#E8547A" opacity="0.1" />
      </svg>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-[10px] font-bold tracking-[0.22em] text-[#FFB7C5] mb-2"
            style={{ fontFamily: "'Noto Serif JP',serif" }}
          >
            メニュー
          </p>
          <span className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#FFB7C5] text-[#B83060] text-[10px] font-bold tracking-widest px-4 py-2 rounded-full shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8547A] inline-block" />
            MENU KAMI
          </span>
          <h2 className="section-title text-[#1A0E14] mb-4">
            Produk <span className="text-[#E8547A]">Unggulan</span>
          </h2>
          <p className="section-subtitle text-[#7A5060] mx-auto">
            Dibuat dengan tangan setiap hari menggunakan bahan premium Jepang.
            Setiap gigitan adalah cerita tradisi dan penuh kasih.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-white text-sm font-bold
                       shadow-[0_6px_18px_rgba(232,84,122,0.28)]
                       hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(232,84,122,0.38)]
                       active:scale-95 transition-all"
            style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
          >
            Lihat Semua Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
