import Typography from "@/components/atoms/typography/Typography";
import { Users } from "lucide-react";

export default function AboutWrapper() {
  return (
    <section className="pad-x-xl py-30 space-y-12">
      <Typography
        title="Tentang Kami"
        badge="Dibalik Layar Kami!"
        icon={Users}
        description="Kami adalah tim profesional yang berdedikasi untuk membantu Anda mencapai tujuan bisnis Anda."
      />
    </section>
  );
}
