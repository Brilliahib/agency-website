"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="pad-x-xl md:pt-0 pt-8 flex grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge
            variant={"outline"}
            className="px-4 py-2 bg-white rounded-full text-sm flex gap-4"
          >
            <Crown className="h-6 w-6" />
            Solusi Digital Terbaik untuk Anda
          </Badge>
          <h1 className="font-bold md:text-5xl text-4xl md:leading-14">
            Menciptakan Keunggulan Digital dengan Kreativitas Tanpa Batas.
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Kami menghadirkan pengalaman digital terbaik yang dipadukan dengan
            inovasi dan imajinasi kreatif.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="default" size={"lg"}>
              Let&apos;s Order
            </Button>
            <Button variant="outline" size={"lg"}>
              Lihat Portofolio
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={"/images/landing/hero.jpg"}
            alt="Website Agency"
            width={2400}
            height={1569}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
