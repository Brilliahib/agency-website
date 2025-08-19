"use client";

export default function HomeHero() {
  return (
    <section className="relative w-full h-screen -mt-[var(--navbar-height)]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Our Agency
        </h1>
      </div>
    </section>
  );
}
