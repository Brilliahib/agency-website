"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  LayoutGrid,
  LucideIcon,
  Monitor,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const portfolios = [
  {
    src: "/images/portfolio/charingcub.png",
    alt: "Charing Cub",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/charingcub.png",
  },
  {
    src: "/images/portfolio/dopamind.png",
    alt: "Dopamind +",
    categories: ["web-landing-page", "mobile-app"],
    logo: "/images/portfolio/logo/dopamind.jpg",
  },
  {
    src: "/images/portfolio/fst.png",
    alt: "Forum Studi Teknik UNDIP",
    categories: ["web-landing-page"],
    logo: "/images/portfolio/logo/fst.png",
  },
  {
    src: "/images/portfolio/meddiscus.png",
    alt: "Meddiscus",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/meddiscus.jpeg",
  },
  {
    src: "/images/portfolio/pkpri.png",
    alt: "PKP RI Surakarta",
    categories: ["web-landing-page"],
    logo: "/images/portfolio/logo/pkpri.png",
  },
  {
    src: "/images/portfolio/vintagee.png",
    alt: "Vintagee",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/vintagee.png",
  },
  {
    src: "/images/portfolio/codelingo.png",
    alt: "Codelingo",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/codelingo.png",
  },
  {
    src: "/images/portfolio/dialisis.png",
    alt: "Dialisis Connect Edu",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/dialisis.png",
  },
  {
    src: "/images/portfolio/ihealth.png",
    alt: "iHealth Edu",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/ihealth.png",
  },
  {
    src: "/images/portfolio/tumbuh-sahabat.png",
    alt: "Tumbuh Sahabat",
    categories: ["web-application"],
    logo: "/images/portfolio/logo/tumbuh-sahabat.png",
  },
  {
    src: "/images/portfolio/lamemba.png",
    alt: "Lamemba",
    categories: ["logo"],
    logo: "/images/portfolio/logo/lamemba.png",
  },
  {
    src: "/images/portfolio/rsud.png",
    alt: "RSUD KRT. Setjonegoro",
    categories: ["logo"],
    logo: "/images/portfolio/logo/rsud.png",
  },
  {
    src: "/images/portfolio/rpk.png",
    alt: "Rumah Pangan Kita",
    categories: ["logo"],
    logo: "/images/portfolio/logo/rpk.png",
  },
];

type CategoryKey =
  | "all"
  | "web-landing-page"
  | "web-application"
  | "ui-ux"
  | "logo"
  | "mobile-app";

interface Category {
  label: string;
  icon: LucideIcon;
}

const categories: Record<CategoryKey, Category> = {
  all: { label: "Semua", icon: LayoutGrid },
  "web-landing-page": { label: "Web Landing Page", icon: PanelsTopLeft },
  "web-application": { label: "Web Application", icon: Monitor },
  "ui-ux": { label: "UI/UX", icon: Smartphone },
  logo: { label: "Logo", icon: Globe },
  "mobile-app": { label: "Mobile App", icon: Smartphone },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

export default function PortfolioTabs() {
  const MotionCard = motion(Card);

  const renderCards = (filtered: typeof portfolios) => (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-y-12 place-items-center"
    >
      {filtered.map((portfolio) => (
        <MotionCard
          key={portfolio.alt}
          variants={item}
          whileHover={{
            scale: 1.02,
            transition: { type: "spring", stiffness: 250, damping: 20 },
          }}
          className="overflow-hidden p-0 shadow-none border-0"
        >
          <CardContent className="space-y-4 p-0">
            <Image
              src={portfolio.src}
              alt={portfolio.alt}
              width={1000}
              height={1000}
              className="rounded-md"
            />
            <div className="flex flex-wrap gap-2">
              {portfolio.categories.map((slug) => {
                const category = categories[slug as CategoryKey];
                return (
                  <Badge key={slug} className="px-3 rounded-full">
                    {category ? category.label : slug}
                  </Badge>
                );
              })}
            </div>
            <h1 className="text-lg font-semibold">{portfolio.alt}</h1>
          </CardContent>
        </MotionCard>
      ))}
    </motion.div>
  );

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center">
        <ScrollArea className="w-full md:w-auto">
          <TabsList className="mb-8 flex gap-4 w-max md:w-auto">
            {Object.entries(categories).map(([slug, { label, icon: Icon }]) => (
              <TabsTrigger
                key={slug}
                value={slug}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" /> {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>
      </div>

      {/* Semua */}
      <TabsContent value="all">{renderCards(portfolios)}</TabsContent>

      {/* Per kategori */}
      {Object.keys(categories)
        .filter((slug) => slug !== "all")
        .map((slug) => (
          <TabsContent key={slug} value={slug}>
            {renderCards(portfolios.filter((p) => p.categories.includes(slug)))}
          </TabsContent>
        ))}
    </Tabs>
  );
}
