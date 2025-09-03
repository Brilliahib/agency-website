"use client";

import PageContainer from "@/components/organisms/container/PageContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingCTA() {
  const circles = [
    { size: 80, top: "10%", left: "15%" },
    { size: 100, top: "30%", left: "70%" },
    { size: 60, top: "60%", left: "20%" },
    { size: 90, top: "75%", left: "80%" },
    { size: 50, top: "40%", left: "40%" },
    { size: 70, top: "85%", left: "10%" },
    { size: 120, top: "15%", left: "85%" },
  ];

  return (
    <PageContainer>
      <section className="relative w-full py-16 bg-primary flex justify-center rounded-xl text-white overflow-hidden">
        {circles.map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
            }}
          />
        ))}

        <div className="relative max-w-2xl text-center px-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Kamu Mahasiswa dan punya tugas mepet?
          </h2>
          <p className="text-lg">
            Tenang, Kami punya solusi untuk Kamu dan pastinya harga lebih murah!
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-md text-primary hover:text-primary/80 font-semibold"
            variant={"outline"}
          >
            <Link href="/pricing">Cek Harga</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
