import type { Metadata } from "next";
import { Inter, Noto_Sans, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/molecules/footer/Footer";

const rubik = Rubik({
  variable: "--font-rubik",
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
    "Creatify - Jasa Pembuatan Website, Mobile App, UI/UX, Branding & Logo Profesional",
  description:
    "Creatify adalah jasa digital kreatif yang menyediakan jasa pembuatan website, aplikasi mobile, desain UI/UX, logo, poster, dan branding untuk bisnis Anda. Solusi lengkap, profesional, dan hasil memukau untuk kebutuhan digital Anda.",
  keywords: [
    "jasa pembuatan website",
    "jasa aplikasi mobile",
    "desain UI UX",
    "jasa logo profesional",
    "branding bisnis",
    "jasa poster",
    "digital kreatif",
    "jasa web design Indonesia",
    "jasa mobile app development",
    "jasa desain grafis",
  ],
  openGraph: {
    title: "Creatify Indonesia",
    description:
      "Creatify adalah jasa digital kreatif yang menyediakan jasa pembuatan website, aplikasi mobile, desain UI/UX, logo, poster, dan branding untuk bisnis Anda. Solusi lengkap, profesional, dan hasil memukau untuk kebutuhan digital Anda.",
    url: "https://www.creatify.id",
    siteName: "Creatify Indonesia",
    images: [
      {
        url: "https://creatify-id.vercel.app/images/logo/creatify-logo.png",
        width: 1200,
        height: 630,
        alt: "Creatify - Jasa Pembuatan Website, Mobile App, UI/UX, Branding & Logo Profesional",
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
        className={`${rubik.variable} ${inter.variable} ${notoSans.variable} antialiased font-rubik`}
      >
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
