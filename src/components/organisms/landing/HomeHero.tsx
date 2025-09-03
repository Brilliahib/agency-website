"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="w-full justify-center items-center h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute md:flex hidden top-20 left-10 w-72 h-72 bg-primary/40 rounded-full blur-[120px]" />
        <div className="absolute md:flex hidden bottom-80 right-20 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
        <div className="absolute md:flex hidden top-1/2 left-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 h-full md:pl-[12%] md:text-left text-center">
        <div className="flex items-center h-full">
          <div className="md:max-w-3xl md:space-y-8 space-y-6 md:px-0 px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Your One-Stop Solution for Digital Needs
            </h1>
            <p className="md:text-lg leading-relaxed text-muted-foreground">
              Kami menyediakan layanan digital mulai dari web app, mobile app,
              hingga desain kreatif seperti logo, poster, dan UI/UX untuk
              membantu brand Anda tampil profesional dan mudah diingat.
            </p>
            <Button className="rounded-md" size={"lg"}>
              Lihat Selengkapnya
            </Button>
          </div>
        </div>
      </div>

      <Image
        src={"/images/landing/mockup-remove.png"}
        alt="Mockup"
        width={700}
        height={700}
        className="absolute md:flex hidden bottom-0 right-0 md:w-[580px] w-[350px] object-contain pointer-events-none"
      />
    </section>
  );
}
