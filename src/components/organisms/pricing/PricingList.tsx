"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pricingUmum, pricingMahasiswa } from "@/data/price";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

function PricingCards({ data }: { data: typeof pricingUmum }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
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
            <Card
              className={`flex flex-col justify-between h-full md:relative ${
                item.is_popular
                  ? "border border-primary bg-secondary"
                  : "bg-secondary"
              }`}
            >
              <CardContent className="space-y-6">
                {item.is_popular && (
                  <div className="md:absolute top-3 right-3 z-10">
                    <Badge
                      variant="default"
                      className="bg-primary text-white shadow-lg shadow-primary/20 px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Star
                        size={14}
                        className="fill-yellow-400 stroke-yellow-400"
                      />
                      TERPOPULER
                    </Badge>
                  </div>
                )}

                <div className="space-y-2">
                  <h1 className="font-semibold font-inter text-lg">
                    {item.title}
                  </h1>
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

export default function PricingList() {
  return (
    <Tabs defaultValue="mahasiswa" className="space-y-4">
      <div className="flex justify-center">
        <TabsList className="max-w-[300px] w-full">
          <TabsTrigger value="mahasiswa">Mahasiswa</TabsTrigger>
          <TabsTrigger value="umum">Umum</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="umum">
        <PricingCards data={pricingUmum} />
      </TabsContent>
      <TabsContent value="mahasiswa">
        <PricingCards data={pricingMahasiswa} />
      </TabsContent>
    </Tabs>
  );
}
