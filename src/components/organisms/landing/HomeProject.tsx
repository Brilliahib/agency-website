"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HomeProject() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-secondary">
      <div className="pad-x-xl py-16 space-y-16">
        {/* Heading + Desc */}
        <motion.div
          className="flex justify-between flex-col md:flex-row gap-6 md:gap-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h1 variants={item} className="font-bold text-4xl leading-12">
            Lihat Proyek <br /> Terbaru Kami
          </motion.h1>
          <motion.p
            variants={item}
            className="text-muted-foreground max-w-md text-xl"
          >
            Dari desain inovatif hingga solusi kreatif, karya terbaru kami
            menampilkan hasil terbaik dalam menciptakan pengalaman digital
            modern.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3 place-items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {[
            { src: "/images/portfolio/charingcub.png", alt: "Proyek 1" },
            { src: "/images/portfolio/dopamind.png", alt: "Proyek 2" },
            { src: "/images/portfolio/fst.png", alt: "Proyek 3" },
            { src: "/images/portfolio/meddiscus.png", alt: "Proyek 4" },
            { src: "/images/portfolio/pkpri.png", alt: "Proyek 5" },
          ].map((proj) => (
            <motion.div
              key={proj.alt}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex justify-center"
            >
              <Image
                src={proj.src}
                width={500}
                height={500}
                alt={proj.alt}
                className="rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
