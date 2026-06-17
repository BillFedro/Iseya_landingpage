"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { SakuraFlower } from "@/components/ui/SakuraFlower";

const galleryImages = [
  { id: "1",  src: "https://picsum.photos/seed/gallery-bakery1/400/500",  alt: "Roti artisan",          aspectClass: "aspect-[4/5]" },
  { id: "2",  src: "https://picsum.photos/seed/gallery-bakery2/400/300",  alt: "Pastri matcha",          aspectClass: "aspect-[4/3]" },
  { id: "3",  src: "https://picsum.photos/seed/gallery-bakery3/400/600",  alt: "Cream puff Jepang",      aspectClass: "aspect-[2/3]" },
  { id: "4",  src: "https://picsum.photos/seed/gallery-bakery4/400/400",  alt: "Etalase toko roti",      aspectClass: "aspect-square" },
  { id: "5",  src: "https://picsum.photos/seed/gallery-bakery5/400/300",  alt: "Croissant keemasan",     aspectClass: "aspect-[4/3]" },
  { id: "6",  src: "https://picsum.photos/seed/gallery-bakery6/400/500",  alt: "Tart stroberi",          aspectClass: "aspect-[4/5]" },
  { id: "7",  src: "https://picsum.photos/seed/gallery-bakery7/400/350",  alt: "Interior kafe",          aspectClass: "aspect-[4/3.5]" },
  { id: "8",  src: "https://picsum.photos/seed/gallery-bakery8/400/600",  alt: "Kue berlapis",           aspectClass: "aspect-[2/3]" },
  { id: "9",  src: "https://picsum.photos/seed/gallery-bakery9/400/400",  alt: "Donat glazed",           aspectClass: "aspect-square" },
  { id: "10", src: "https://picsum.photos/seed/gallery-bakery10/400/300", alt: "Meja panggang pagi",     aspectClass: "aspect-[4/3]" },
  { id: "11", src: "https://picsum.photos/seed/gallery-bakery11/400/500", alt: "Pilihan mochi",          aspectClass: "aspect-[4/5]" },
  { id: "12", src: "https://picsum.photos/seed/gallery-bakery12/400/350", alt: "Proses memanggang",      aspectClass: "aspect-[4/3.5]" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative section-padding overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 20% 30%, #FFE8EF 0%, #FFF8F5 55%)" }}
    >
      {/* Decorative bg */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      >
        <SakuraFlower cx={1180} cy={80}  size={0.9} opacity={0.1} />
        <SakuraFlower cx={100}  cy={820} size={0.8} opacity={0.08} />
        <circle cx="300"  cy="100" r="2"   fill="#FFB7C5" opacity="0.22" />
        <circle cx="1100" cy="800" r="2.5" fill="#E8547A"  opacity="0.1" />
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
            ギャラリー
          </p>
          <span className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#FFB7C5] text-[#B83060] text-[10px] font-bold tracking-widest px-4 py-2 rounded-full shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8547A] inline-block" />
            GALERI
          </span>
          <h2 className="section-title text-[#1A0E14] mb-4">
            Pesta untuk{" "}
            <span className="text-[#E8547A]">Mata</span>
          </h2>
          <p className="section-subtitle text-[#7A5060] mx-auto">
            Intip dunia kami — dari croissant keemasan hingga matcha roll yang lembut,
            setiap kreasi adalah sebuah karya seni.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer border-[1.5px] border-[#FFD6E0]"
            >
              <div className={`relative w-full ${img.aspectClass}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#E8547A]/0 group-hover:bg-[#E8547A]/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <ZoomIn size={17} className="text-[#E8547A]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
