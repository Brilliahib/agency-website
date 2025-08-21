import PricingWrapper from "@/components/organisms/pricing/PricingWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga - Creatify",
  description:
    "Temukan paket harga terbaik untuk layanan digital kami, mulai dari pembuatan website, aplikasi mobile, hingga desain kreatif yang sesuai dengan kebutuhan bisnis Anda.",
};

export default function PricingPage() {
  return (
    <div>
      <PricingWrapper />
    </div>
  );
}
