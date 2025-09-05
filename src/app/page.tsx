import WhatsAppButton from "@/components/atoms/button/ButtonWhatsapp";
import LandingCTA from "@/components/molecules/CTA/LandingCTA";
import HomeCollaboration from "@/components/organisms/landing/HomeCollaboration";
import HomeHero from "@/components/organisms/landing/HomeHero";
import HomeProject from "@/components/organisms/landing/HomeProject";
import HomeProvide from "@/components/organisms/landing/HomeProvide";
import HomeService from "@/components/organisms/landing/HomeService";

export default function Home() {
  return (
    <section>
      <HomeHero />
      <div className="space-y-24 md:space-y-30">
        <HomeService />
        <HomeCollaboration />
        <HomeProvide />
        <LandingCTA />
        <HomeProject />
        <WhatsAppButton />
      </div>
    </section>
  );
}
