/* eslint-disable @next/next/no-img-element */

/* ============================================
   SectionTransition — Image de transition
   Positionnée entre le Hero (blanc) et WhySection (sombre).
   Utilise un <img> natif pour éviter les problèmes
   de cache / optimisation Next Image.
   ============================================ */

export default function SectionTransition() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full select-none overflow-hidden"
      style={{
        marginTop: "-1px",
        marginBottom: "-1px",
      }}
    >
      <img
        src="/images/hero-transition.webp"
        alt=""
        className="block w-full h-auto"
        draggable={false}
      />
    </div>
  );
}
