"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  LayoutGrid,
  Monitor,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const portfolios = [
  {
    src: "/images/portfolio/portfolio-1.png",
    alt: "Portfolio 1",
    category: "web-landing-page",
  },
  {
    src: "/images/portfolio/portfolio-2.png",
    alt: "Portfolio 2",
    category: "web-landing-page",
  },
  {
    src: "/images/portfolio/portfolio-3.png",
    alt: "Portfolio 3",
    category: "web-application",
  },
  {
    src: "/images/portfolio/portfolio-4.png",
    alt: "Portfolio 4",
    category: "web-application",
  },
  {
    src: "/images/portfolio/portfolio-5.png",
    alt: "Portfolio 5",
    category: "ui-ux",
  },
  {
    src: "/images/portfolio/portfolio-6.png",
    alt: "Portfolio 6",
    category: "ui-ux",
  },
  {
    src: "/images/portfolio/portfolio-7.png",
    alt: "Portfolio 7",
    category: "logo",
  },
  {
    src: "/images/portfolio/portfolio-8.png",
    alt: "Portfolio 8",
    category: "logo",
  },
  {
    src: "/images/portfolio/portfolio-9.png",
    alt: "Portfolio 9",
    category: "logo",
  },
];

export default function PortfolioTabs() {
  const MotionCard = motion(Card);

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center">
        <ScrollArea className="w-full md:w-auto">
          <TabsList className="mb-8 flex gap-4 w-max md:w-auto">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <LayoutGrid /> Semua
            </TabsTrigger>
            <TabsTrigger
              value="web-landing-page"
              className="flex items-center gap-2"
            >
              <PanelsTopLeft /> Web Landing Page
            </TabsTrigger>
            <TabsTrigger
              value="web-application"
              className="flex items-center gap-2"
            >
              <Monitor /> Web Application
            </TabsTrigger>
            <TabsTrigger value="ui-ux" className="flex items-center gap-2">
              <Smartphone /> UI/UX
            </TabsTrigger>
            <TabsTrigger value="logo" className="flex items-center gap-2">
              <Globe /> Logo
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>
      </div>

      <TabsContent value="all">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {portfolios.map((portfolio, i) => (
            <MotionCard
              key={portfolio.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden"
            >
              <CardContent>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={portfolio.src}
                    alt={portfolio.alt}
                    width={1000}
                    height={1000}
                    className="rounded-md transition-transform duration-300"
                  />
                </motion.div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </TabsContent>

      {["web-landing-page", "web-application", "ui-ux", "logo"].map((cat) => (
        <TabsContent key={cat} value={cat}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {portfolios
              .filter((p) => p.category === cat)
              .map((portfolio, i) => (
                <MotionCard
                  key={portfolio.alt}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden"
                >
                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={portfolio.src}
                        alt={portfolio.alt}
                        width={1000}
                        height={1000}
                        className="rounded-md transition-transform duration-300"
                      />
                    </motion.div>
                  </CardContent>
                </MotionCard>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
