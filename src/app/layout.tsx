import type { Metadata } from "next";
import { Figtree, Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/molecules/footer/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Creatify Agency - Jasa Website, Mobile App, UI/UX, Branding & Logo Profesional",
  description:
    "Creatify adalah agency digital kreatif yang menyediakan jasa pembuatan website, aplikasi mobile, desain UI/UX, logo, poster, dan branding untuk bisnis Anda. Solusi lengkap, profesional, dan hasil memukau untuk kebutuhan digital Anda.",
  keywords: [
    "jasa pembuatan website",
    "jasa aplikasi mobile",
    "desain UI UX",
    "jasa logo profesional",
    "branding bisnis",
    "jasa poster",
    "agency digital kreatif",
    "jasa web design Indonesia",
    "jasa mobile app development",
    "jasa desain grafis",
  ],
  openGraph: {
    title: "Creatify Indonesia",
    description:
      "Website, Mobile App, UI/UX, Logo, Branding — semua dalam satu agency digital kreatif bernama Creatify.",
    url: "https://www.creatify.id",
    siteName: "Creatify Indonesia",
    images: [
      {
        url: "https://creatify-id.vercel.app/images/logo/creatify-logo.png",
        width: 1200,
        height: 630,
        alt: "Creatify - Solusi Digital Lengkap untuk Bisnis Anda",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${inter.variable} ${notoSans.variable} antialiased font-figtree`}
      >
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
