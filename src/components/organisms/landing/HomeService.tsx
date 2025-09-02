"use client";

import Typography from "@/components/atoms/typography/Typography";
import { Card, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

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
          viewport={{ once: true, amount: 0.2 }}
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
                title: "Mobile Application",
                desc: "Tim kreatif kami berfokus pada pembuatan aplikasi mobile yang mudah digunakan, interaktif, dan mampu meningkatkan keterlibatan serta pertumbuhan bisnis Anda.",
                images: "/images/services/home/mobile.svg",
              },
              {
                title: "Website Development",
                desc: "Kami merancang dan mengembangkan website yang modern, responsif, dan berorientasi pada pengalaman pengguna untuk mendukung kehadiran digital bisnis Anda.",
                images: "/images/services/home/web.svg",
              },
            ].map((service) => (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-secondary h-full">
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-xl font-semibold">
                          {service.title}
                        </h1>
                        <p className="text-muted-foreground">{service.desc}</p>
                      </div>
                      <Image
                        src={service.images}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="md:max-h-[250px] max-h-[200px]"
                      />
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
                images: "/images/services/home/ui-ux.svg",
              },
              {
                title: "Logo Design",
                desc: "Kami menciptakan identitas visual berupa logo yang unik, profesional, dan mampu merepresentasikan nilai serta visi bisnis Anda.",
                images: "/images/services/home/logo.svg",
              },
              {
                title: "Poster",
                desc: "Kami merancang poster yang menarik dan informatif untuk keperluan promosi, acara, atau kampanye pemasaran Anda.",
                images: "/images/services/home/poster.svg",
              },
            ].map((service) => (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-secondary h-full">
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-xl font-semibold">
                          {service.title}
                        </h1>
                        <p className="text-muted-foreground">{service.desc}</p>
                      </div>
                      <Image
                        src={service.images}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="md:max-h-[250px] max-h-[200px]"
                      />
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
