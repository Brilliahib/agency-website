import Typography from "@/components/atoms/typography/Typography";
import { Crown } from "lucide-react";
import PricingList from "./PricingList";
import PageContainer from "../container/PageContainer";

export default function PricingContent() {
  return (
    <PageContainer>
      <Typography
        title="Daftar Harga"
        badge="Harga Murah Produk Mewah!"
        description="Temukan harga terbaik untuk produk berkualitas kami. 
        Kami percaya bahwa kualitas tidak harus selalu mahal."
        icon={Crown}
      />
      <PricingList />
    </PageContainer>
  );
}
