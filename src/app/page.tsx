import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselSection from "./components/CarouselSection";
import HeroSection from "./components/HeroSection";
import RankingSection from "./components/RankingSection";
import CardShowcaseSection from "./components/CardShowcaseSection";
import FeatureCardsSection from "./components/FeatureCardsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CarouselSection />
      <HeroSection />
      <RankingSection />
      <CardShowcaseSection />
      <FeatureCardsSection />
    </>
  );
}
