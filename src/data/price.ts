export interface PricingItem {
  title: string;
  slug: string;
  description: string;
  price: string;
  features: string[];
}

export const pricingData: PricingItem[] = [
  {
    title: "Mobile Application",
    slug: "mobile-application",
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
    slug: "web-landing-page",
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
    slug: "web-application",
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
    slug: "desain-logo",
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
    slug: "ui-ux",
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
