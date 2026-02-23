import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-bg-light min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
