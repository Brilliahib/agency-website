import AboutWrapper from "@/components/organisms/about/AboutWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Creatify",
  description:
    "Creatify adalah layanan digital yang menyediakan layanan pembuatan website, aplikasi mobile, dan desain kreatif untuk membantu bisnis Anda tumbuh.",
};

export default function AboutPage() {
  return (
    <section>
      <AboutWrapper />
    </section>
  );
}
