import Typography from "@/components/atoms/typography/Typography";
import { Globe } from "lucide-react";
import PortfolioList from "./PortfolioList";
import PageContainer from "../container/PageContainer";

export default function PortfolioWrapper() {
  return (
    <PageContainer>
      <Typography
        title="Project Yang Sudah Diselesaikan"
        description="Berikut adalah beberapa proyek yang telah kami selesaikan dengan sukses."
        icon={Globe}
        badge="Portfolio Kami"
      />
      <PortfolioList />
    </PageContainer>
  );
}
