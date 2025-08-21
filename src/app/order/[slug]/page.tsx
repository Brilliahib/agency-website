import OrderWrapper from "@/components/organisms/order/OrderWrapper";
import { Metadata } from "next";

interface OrderDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: "Order - Creatify",
  description:
    "Lakukan pemesanan layanan digital Creatify dengan mudah dan cepat. Pilih paket sesuai kebutuhan bisnis Anda untuk website, aplikasi, atau desain kreatif.",
};

export default async function OrderDetailPage({
  params,
}: OrderDetailPageProps) {
  const { slug } = await params;
  return (
    <section>
      <OrderWrapper slug={slug} />
    </section>
  );
}
