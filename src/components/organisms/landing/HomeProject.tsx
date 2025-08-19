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
          viewport={{ once: false, amount: 0.2 }}
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

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={container}
        >
          {[
            { src: "/images/project/project-1.png", alt: "Proyek 1" },
            { src: "/images/project/project-2.png", alt: "Proyek 2" },
            { src: "/images/project/project-3.png", alt: "Proyek 3" },
            { src: "/images/project/project-4.png", alt: "Proyek 4" },
          ].map((proj) => (
            <motion.div
              key={proj.alt}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={proj.src}
                width={1000}
                height={1000}
                alt={proj.alt}
                className="rounded-3xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
