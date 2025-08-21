"use client";

import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <section className="relative w-full h-screen -mt-[var(--navbar-height)]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div className="md:max-w-3xl md:space-y-8 space-y-6 md:px-0 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Your One-Stop Solution for Digital Needs
          </h1>
          <p className="md:text-lg leading-relaxed">
            Kami menyediakan layanan digital mulai dari web app, mobile app,
            hingga desain kreatif seperti logo, poster, dan UI/UX untuk membantu
            brand Anda tampil profesional dan mudah diingat.
          </p>
          <Button className="rounded-md" size={"lg"}>
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
}
