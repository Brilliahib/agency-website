import ServiceWebWrapper from "@/components/organisms/services/web/ServiceWebWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development - hi-peeps",
  description: "Halaman harga untuk layanan kami.",
};

export default function ServiceWebPage() {
  return (
    <section>
      <ServiceWebWrapper />
    </section>
  );
}
