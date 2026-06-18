import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BestSellers from "@/components/sections/BestSellers";
import PromoBanner from "@/components/sections/PromoBanner";
// import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <BestSellers />
        <PromoBanner />
        {/* <Gallery /> */}
      </main>
      <Footer />
    </>
  );
}
