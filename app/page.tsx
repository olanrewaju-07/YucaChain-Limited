import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Ecosystem from "@/components/Ecosystem";
import ProductSection from "@/components/ProductSection";
import ComingSoon from "@/components/ComingSoon";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Advisors from "@/components/Advisors";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import YucaNews from "@/components/yucanews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-background">
      <Header />
      <Hero />
      <OurStory />
      <Ecosystem />
      <ProductSection />
      <ComingSoon />
      <Testimonials />
      <Team />
      <Advisors />
      <Partners />
      <FAQ />
      <YucaNews />
      <ContactForm />
      <Footer />
    </main>
  );
}
