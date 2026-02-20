import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import ProductSection from "@/components/ProductSection";
import ComingSoon from "@/components/ComingSoon";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Advisors from "@/components/Advisors";
import Partners from "@/components/Partners";
import BackedBy from "@/components/BackedBy";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-background">
      <Header />
      <Hero />
      <Partners />
      <Ecosystem />
      <ProductSection />
      <ComingSoon />
      <Testimonials />
      <Team />
      <Advisors />
      <BackedBy />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
