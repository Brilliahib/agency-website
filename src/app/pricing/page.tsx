import PricingWrapper from "@/components/organisms/pricing/PricingWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga - Agency",
  description: "Halaman harga untuk layanan kami.",
};

export default function PricingPage() {
  return (
    <div>
      <PricingWrapper />
    </div>
  );
}
