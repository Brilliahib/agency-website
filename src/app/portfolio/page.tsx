import PortfolioWrapper from "@/components/organisms/portfolio/PortfolioWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Creatify",
  description:
    "Temukan inspirasi dan contoh karya terbaik kami dalam layanan digital, mulai dari pembuatan website, aplikasi mobile, hingga desain kreatif yang sesuai dengan kebutuhan bisnis Anda.",
};

export default function PortfolioPage() {
  return (
    <section>
      <PortfolioWrapper />
    </section>
  );
}
