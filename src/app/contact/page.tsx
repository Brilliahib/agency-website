import ContactWrapper from "@/components/organisms/contact/ContactWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak - Creatify",
  description:
    "Hubungi Creatify untuk layanan pembuatan website, aplikasi mobile, dan desain kreatif. Tim kami siap membantu kebutuhan digital bisnis Anda.",
};

export default function ContactPage() {
  return (
    <section>
      <ContactWrapper />
    </section>
  );
}
