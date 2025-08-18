import Typography from "@/components/atoms/typography/Typography";
import { Crown } from "lucide-react";
import PricingList from "./PricingList";

export default function PricingContent() {
  return (
    <section className="pad-x-xl py-16 space-y-12">
      <Typography
        title="Daftar Harga"
        badge="Harga Murah Produk Mewah!"
        description="Temukan harga terbaik untuk produk berkualitas kami. 
        Kami percaya bahwa kualitas tidak harus selalu mahal."
        icon={Crown}
      />
      <PricingList />
    </section>
  );
}
