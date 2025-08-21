import Typography from "@/components/atoms/typography/Typography";
import { Users } from "lucide-react";
import PageContainer from "../container/PageContainer";

export default function AboutWrapper() {
  return (
    <PageContainer>
      <Typography
        title="Tentang Kami"
        badge="Dibalik Layar Kami!"
        icon={Users}
        description="Kami adalah tim profesional yang berdedikasi untuk membantu Anda mencapai tujuan bisnis Anda."
      />
    </PageContainer>
  );
}
