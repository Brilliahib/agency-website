"use client";

import Typography from "@/components/atoms/typography/Typography";
import { Card, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HomeService() {
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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white">
      <div className="pad-x-xl space-y-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={item}>
            <Typography
              badge="Solusi Kami"
              icon={Crown}
              title="Layanan Digital Agency Kami"
              description="Kami menyediakan berbagai solusi digital mulai dari desain web responsif, pengembangan aplikasi, strategi pemasaran digital."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Aplikasi Mobile",
                desc: "Tim kreatif kami berfokus pada pembuatan aplikasi mobile yang mudah digunakan, interaktif, dan mampu meningkatkan keterlibatan serta pertumbuhan bisnis Anda.",
              },
              {
                title: "Website",
                desc: "Kami merancang dan mengembangkan website yang modern, responsif, dan berorientasi pada pengalaman pengguna untuk mendukung kehadiran digital bisnis Anda.",
              },
            ].map((service) => (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-secondary h-full">
                  <CardContent>
                    <div className="space-y-4">
                      <h1 className="text-xl font-semibold">{service.title}</h1>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "UI / UX",
                desc: "Kami menghadirkan desain antarmuka dan pengalaman pengguna yang intuitif, menarik, serta memudahkan interaksi dengan produk digital Anda.",
              },
              {
                title: "Desain Logo",
                desc: "Kami menciptakan identitas visual berupa logo yang unik, profesional, dan mampu merepresentasikan nilai serta visi bisnis Anda.",
              },
              {
                title: "Branding & Marketing",
                desc: "Kami membantu memperkuat citra merek serta merancang strategi pemasaran kreatif untuk meningkatkan visibilitas dan daya tarik bisnis Anda di dunia digital.",
              },
            ].map((service) => (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-secondary h-full">
                  <CardContent>
                    <div className="space-y-4">
                      <h1 className="text-xl font-semibold">{service.title}</h1>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
