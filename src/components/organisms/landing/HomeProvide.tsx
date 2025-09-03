"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HomeProvide() {
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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white">
      <div className="pad-x-xl grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Text */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h1 variants={item} className="text-4xl font-bold">
            Kami Siap Memberikan Layanan Terbaik
          </motion.h1>

          <motion.p variants={item} className="text-muted-foreground text-md">
            Komitmen kami terhadap kualitas mendorong kami untuk selalu
            melampaui ekspektasi, memastikan setiap interaksi bersama kami
            menjadi pengalaman yang lancar dan memuaskan.
          </motion.p>

          <motion.div variants={item}>
            <Button size={"lg"}>Let&apos;s Order</Button>
          </motion.div>

          {/* Statistik */}
          <motion.div
            variants={container}
            className="grid grid-cols-3 gap-6 md:gap-0 md:mt-8"
          >
            {[
              { value: "15+", label: "Proyek" },
              { value: "50+", label: "Ulasan" },
              { value: "2+", label: "Tahun Pengalaman" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="space-y-2"
              >
                <h1 className="text-2xl font-bold">{stat.value}</h1>
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/images/landing/provide.jpg"}
            alt="Layanan terbaik untuk Anda"
            width={1000}
            height={1000}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
