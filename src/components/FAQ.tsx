"use client";

import { faqData } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import AccordionGroup from "@/components/ui/Accordion";

/* ============================================
   FAQ — Fond blanc (section-white)
   Accordéon clean, minimal
   ============================================ */

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 section-white">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={faqData.title} titleAccent={faqData.titleAccent} />
        <AccordionGroup items={faqData.items} />
      </div>
    </section>
  );
}
