"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { pricingData } from "@/data/price";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pricingData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Link href={`/order/${item.slug}`}>
            <Card className="bg-secondary flex flex-col justify-between h-full">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h1 className="font-semibold font-inter">{item.title}</h1>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Mulai dari</p>
                  <h1 className="font-bold text-3xl font-inter">
                    {item.price}
                  </h1>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-md" size={"lg"}>
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
