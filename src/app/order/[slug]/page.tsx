import OrderWrapper from "@/components/organisms/order/OrderWrapper";
import { Metadata } from "next";

interface OrderDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: "Order - Agency",
  description: "Halaman harga untuk layanan kami.",
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
