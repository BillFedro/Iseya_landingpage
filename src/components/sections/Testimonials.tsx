"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-[#FFF0F3] via-white to-[#FFF8F5] dark:from-slate-950 dark:via-slate-900 dark:to-rose-950/10"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="section-title mb-4">
            What Our{" "}
            <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from real bakers&apos; fans — because our customers
            are our greatest recipe.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="glass-card rounded-3xl p-8 sm:p-10 relative">
                  {/* Quote icon */}
                  <Quote
                    size={36}
                    className="text-rose-200 dark:text-rose-800 absolute top-6 right-6"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-base sm:text-lg text-foreground/80 italic leading-relaxed mb-6 pr-8">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>

                  {/* Customer */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-rose-200 dark:ring-rose-800">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current
                    ? "w-6 bg-rose-500"
                    : "w-2 bg-muted-foreground/30 hover:bg-rose-300"
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
