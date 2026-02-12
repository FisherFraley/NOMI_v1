import HeroSection from "@/components/HeroSection";
import ProductOverview from "@/components/ProductOverview";
import WhatNomiDoes from "@/components/WhatNomiDoes";
import SeeHowItWorks from "@/components/SeeHowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductOverview />
      <WhatNomiDoes />
      <SeeHowItWorks />
      <Footer />
    </main>
  );
}
