export interface PricingItem {
  title: string;
  slug: string;
  description: string;
  price: string;
  features: string[];
  is_popular: boolean;
}

export const pricingUmum: PricingItem[] = [
  {
    title: "Mobile Application",
    slug: "mobile-application",
    description: "Pembuatan aplikasi mobile untuk Android.",
    price: "Rp. 2.500.000",
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
    is_popular: false,
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
    is_popular: false,
  },
  {
    title: "Web Application",
    slug: "web-application",
    description: "Aplikasi berbasis web dengan fitur sesuai kebutuhan.",
    price: "Rp. 2.500.000",
    features: [
      "Revisi hingga 10x",
      "Gratis domain & server VPS / hosting 1 tahun",
      "Integrasi API & database",
      "Manajemen user & autentikasi",
      "UI/UX interaktif & modern",
      "Backup & restore data otomatis",
      "Optimasi keamanan & enkripsi data",
      "Free support 3 bulan",
      "Dokumentasi teknis lengkap",
      "Pelatihan penggunaan sistem",
    ],
    is_popular: false,
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
    is_popular: false,
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
    is_popular: false,
  },
];

export const pricingMahasiswa: PricingItem[] = [
  {
    title: "Joki Tugas Pemrograman",
    slug: "joki-tugas-mahasiswa",
    description:
      "Mengerjakan tugas pemrograman mahasiswa (web, mobile, desktop) dengan kualitas rapi & tepat waktu.",
    price: "Rp. 79.000",
    features: [
      "Bisa untuk tugas Web, Mobile, atau Desktop",
      "Kode bersih & terdokumentasi",
      "Revisi hingga 3x",
      "Free konsultasi 1x via online meeting",
      "Support bahasa pemrograman populer (Java, Python, PHP, JS, dll.)",
      "Pengerjaan tepat waktu",
    ],
    is_popular: true,
  },
  {
    title: "Web App",
    slug: "web-app-mahasiswa",
    description: "Aplikasi web ringan sesuai kebutuhan proyek mahasiswa.",
    price: "Rp. 500.000",
    features: [
      "Revisi hingga 5x",
      "Deploy gratis ke Vercel/Render (SSL otomatis)",
      "Integrasi database dasar",
      "Manajemen user sederhana",
      "UI/UX responsif",
      "Backup manual",
      "Free support 1 bulan",
      "Dokumentasi penggunaan",
    ],
    is_popular: false,
  },

  {
    title: "Website Landing Page",
    slug: "landing-page-mahasiswa",
    description:
      "Landing page simpel untuk portofolio atau organisasi mahasiswa.",
    price: "Rp. 250.000",
    features: [
      "Revisi hingga 3x",
      "Deploy gratis ke Vercel/Netlify (sudah termasuk SSL otomatis)",
      "Desain responsif (mobile friendly)",
      "Integrasi form kontak",
      "Optimasi loading dasar",
      "Free support 1 bulan",
    ],
    is_popular: false,
  },
  {
    title: "Mobile App",
    slug: "mobile-app-mahasiswa",
    description:
      "Pembuatan aplikasi mobile sederhana untuk kebutuhan mahasiswa.",
    price: "Rp. 1.000.000",
    features: [
      "Revisi hingga 5x",
      "Publikasi ke Play Store",
      "UI/UX sederhana & responsif",
      "Integrasi API dasar",
      "Notifikasi push opsional",
      "Optimasi performa standar",
      "Free support 1 bulan",
    ],
    is_popular: false,
  },
  {
    title: "Desain Logo",
    slug: "logo-mahasiswa",
    description:
      "Logo kreatif untuk organisasi, event, atau komunitas mahasiswa.",
    price: "Rp. 100.000",
    features: [
      "Revisi hingga 5x",
      "File final (PNG, JPG)",
      "Mockup sederhana",
      "Variasi warna dasar",
      "Free favicon untuk website",
    ],
    is_popular: false,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-mahasiswa",
    description: "Desain UI/UX untuk project atau tugas akhir mahasiswa.",
    price: "Rp. 200.000",
    features: [
      "Revisi hingga 5x",
      "Wireframe dasar",
      "File Figma lengkap",
      "Responsive layout (mobile & desktop)",
      "User flow sederhana",
      "Dokumentasi design ringkas",
    ],
    is_popular: false,
  },
];

export const pricingData: PricingItem[] = [...pricingUmum, ...pricingMahasiswa];
