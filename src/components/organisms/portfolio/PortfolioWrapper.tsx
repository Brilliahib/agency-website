import Typography from "@/components/atoms/typography/Typography";
import { Globe } from "lucide-react";

export default function PortfolioWrapper() {
  return (
    <div className="pad-x-xl space-y-12 py-16">
      <Typography
        title="Project Yang Sudah Diselesaikan"
        description="Berikut adalah beberapa proyek yang telah kami selesaikan dengan sukses."
        icon={Globe}
        badge="Portfolio Kami"
      />
    </div>
  );
}
