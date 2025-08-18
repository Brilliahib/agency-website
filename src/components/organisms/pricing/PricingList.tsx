"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PricingItem {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    title: "Mobile Application",
    description: "Pembuatan aplikasi mobile untuk Android.",
    price: "Rp. 1.000.000",
    features: [
      "Revisi hingga 7x",
      "Publikasi ke Play Store",
      "Source code & dokumentasi lengkap",
      "UI/UX modern & responsif",
      "Integrasi API pihak ketiga",
      "Notifikasi push",
      "Optimasi performa & keamanan",
      "Free support & maintenance 1 bulan",
      "Panduan penggunaan aplikasi",
    ],
  },
  {
    title: "Website Landing Page",
    description: "Landing page profesional untuk bisnis & produk Anda.",
    price: "Rp. 500.000",
    features: [
      "Revisi hingga 5x",
      "Gratis domain & hosting 1 tahun",
      "Optimasi SEO dasar",
      "Integrasi form & WhatsApp",
      "Desain responsif (mobile friendly)",
      "Analytics & pelacakan pengunjung",
      "Kecepatan loading teroptimasi",
      "Sertifikat SSL gratis",
      "Free support 1 bulan",
    ],
  },
  {
    title: "Web Application",
    description: "Aplikasi berbasis web dengan fitur sesuai kebutuhan.",
    price: "Rp. 2.500.000",
    features: [
      "Revisi hingga 10x",
      "Gratis domain & server VPS 1 tahun",
      "Integrasi API & database",
      "Manajemen user & autentikasi",
      "UI/UX interaktif & modern",
      "Backup & restore data otomatis",
      "Optimasi keamanan & enkripsi data",
      "Free support 3 bulan",
      "Dokumentasi teknis lengkap",
      "Pelatihan penggunaan sistem",
    ],
  },
  {
    title: "Desain Logo",
    description: "Logo unik & profesional untuk brand Anda.",
    price: "Rp. 300.000",
    features: [
      "Revisi hingga 7x",
      "File final (PNG, JPG, SVG, PDF)",
      "Mockup presentasi (kartu nama, banner, dll)",
      "Manual guide penggunaan logo",
      "Variasi warna & versi monokrom",
      "File vektor untuk cetak besar",
      "Inspirasi brand color palette",
      "Free favicon untuk website",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Desain UI/UX modern untuk aplikasi atau website.",
    price: "Rp. 1.200.000",
    features: [
      "Revisi hingga 7x",
      "Wireframe & prototyping interaktif",
      "File Figma lengkap",
      "Style guide & design system",
      "Responsive layout (mobile, tablet, desktop)",
      "User flow & journey map",
      "Komponen reusable",
      "Presentasi design ke stakeholder",
      "Dokumentasi design lengkap",
    ],
  },
];

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
          <Card className="bg-secondary flex flex-col justify-between h-full">
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h1 className="font-semibold font-inter">{item.title}</h1>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Mulai dari</p>
                <h1 className="font-bold text-3xl font-inter">{item.price}</h1>
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
        </motion.div>
      ))}
    </div>
  );
}
