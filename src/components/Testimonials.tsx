"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

/* ============================================
   Testimonials — Section SOMBRE (alternance)
   Cards portrait style Uppbeat
   Carrousel auto-scroll + drag
   ============================================ */

const bgGradients = [
  "from-brand-pink/20 to-brand-purple/10",
  "from-brand-blue/20 to-brand-cyan/10",
  "from-brand-purple/20 to-brand-pink/10",
  "from-brand-orange/20 to-brand-pink/10",
  "from-brand-cyan/20 to-brand-blue/10",
  "from-brand-pink/15 to-brand-orange/10",
  "from-brand-blue/15 to-brand-purple/10",
  "from-brand-purple/15 to-brand-blue/10",
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonialsData.testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="flex-shrink-0 w-[280px] sm:w-[300px]"
    >
      <div className="group h-full rounded-2xl overflow-hidden card-dark">
        {/* Avatar area */}
        <div className={`relative h-44 bg-gradient-to-br ${bgGradients[index % bgGradients.length]} flex items-center justify-center`}>
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20">
            {testimonial.avatar}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Stars */}
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-text-light-secondary text-sm leading-relaxed mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div>
            <p className="text-sm font-semibold text-text-light">
              {testimonial.name}
            </p>
            <p className="text-xs text-text-light-muted mt-0.5">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || scrollWidth === 0) return;
    const speed = 0.03;
    let newX = x.get() - delta * speed;
    if (Math.abs(newX) >= scrollWidth) newX = 0;
    x.set(newX);
  });

  const duplicatedTestimonials = [
    ...testimonialsData.testimonials,
    ...testimonialsData.testimonials,
  ];

  return (
    <section id="temoignages" className="relative py-24 sm:py-32 section-dark overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={testimonialsData.title}
          titleAccent={testimonialsData.titleAccent}
          dark
        />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-5 px-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -(scrollWidth || 0), right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              index={index % testimonialsData.testimonials.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
