"use client";

import { motion } from "framer-motion";
import { Wheat, Clock, Heart, ShieldCheck } from "lucide-react";
import { SakuraFlower } from "@/components/ui/SakuraFlower";

const features = [
  {
    icon: Wheat,
    title: "Bahan Premium",
    description:
      "Kami menggunakan tepung Jepang terbaik, susu Hokkaido, dan produk musiman untuk cita rasa yang autentik di setiap gigitan.",
  },
  {
    icon: Clock,
    title: "Segar Setiap Hari",
    description:
      "Dipanggang dari awal setiap pagi sebelum kami buka. Tidak ada roti kemarin, tidak ada jalan pintas — hanya kesegaran nyata.",
  },
  {
    icon: Heart,
    title: "Kualitas Buatan Tangan",
    description:
      "Setiap roti, tart, dan pastri dibentuk dengan tangan oleh para pengrajin kami yang terlatih dalam teknik tradisional.",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa Pengawet",
    description:
      "Label bersih, bahan jujur. Apa yang kamu lihat itulah yang kamu dapat — murni alami, bebas bahan tambahan.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative section-padding overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 70% 20%, #FFE8EF 0%, #FFF8F5 60%)" }}
    >
      {/* Decorative bg */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1280 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      >
        <SakuraFlower cx={80}   cy={80}  size={0.9} opacity={0.1} />
        <SakuraFlower cx={1200} cy={600} size={0.8} opacity={0.09} />
        <SakuraFlower cx={640}  cy={680} size={0.6} opacity={0.06} />
        <circle cx="1100" cy="100" r="2.5" fill="#FFB7C5" opacity="0.2" />
        <circle cx="200"  cy="600" r="2"   fill="#E8547A"  opacity="0.1" />
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
            なぜイセヤ？
          </p>
          <span className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#FFB7C5] text-[#B83060] text-[10px] font-bold tracking-widest px-4 py-2 rounded-full shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8547A] inline-block" />
            MENGAPA ISEYA
          </span>
          <h2 className="section-title text-[#1A0E14] mb-4">
            Kenapa Pilih{" "}
            <span className="text-[#E8547A]">Iseya</span>?
          </h2>
          <p className="section-subtitle text-[#7A5060] mx-auto">
            Kami percaya bahwa membuat roti yang luar biasa dimulai dari integritas —
            dalam bahan, proses, dan orang-orang kami.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="bg-white border-l-4 border-[#E8547A] rounded-r-2xl p-6
                         shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon size={20} className="text-[#E8547A]" />
              </div>
              <h3 className="font-bold text-[#1A0E14] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#7A5060] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
