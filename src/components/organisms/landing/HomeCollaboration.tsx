"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lamp, Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HomeCollaboration() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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
      <div className="pad-x-xl grid md:grid-cols-2 gap-6 md:gap-12 items-stretch">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full relative rounded-3xl overflow-hidden"
        >
          <Image
            src={"/images/landing/collaboration.jpg"}
            alt="Kolaborasi"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={container}
        >
          <motion.h1 variants={item} className="font-bold text-4xl">
            Kolaborasi Bersama Tim Kreatif Kami
          </motion.h1>

          <motion.p variants={item} className="text-muted-foreground">
            Kami percaya pada kekuatan kolaborasi dan bekerja sama secara erat
            dengan klien untuk mewujudkan visi mereka menjadi nyata.
          </motion.p>

          <motion.div variants={container} className="flex flex-col gap-6">
            {[
              {
                icon: <Lightbulb />,
                title: "Perencanaan yang Matang",
                desc: "Kami meluangkan waktu untuk memahami tujuan Anda, sehingga proses desain berjalan lebih lancar, efisien, dan tepat sasaran.",
              },
              {
                icon: <Lamp />,
                title: "Solusi Kreatif",
                desc: "Tim kami selalu menghadirkan ide-ide segar dan pendekatan inovatif di setiap proyek yang kami kerjakan.",
              },
            ].map((service) => (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-secondary">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary p-4 rounded-xl w-fit border text-white">
                        {service.icon}
                      </div>
                      <h1 className="text-xl font-semibold">{service.title}</h1>
                    </div>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
