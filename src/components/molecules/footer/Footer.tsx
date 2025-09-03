import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const circles = [
    { size: 100, top: "10%", left: "20%" },
    { size: 80, top: "30%", left: "70%" },
    { size: 60, top: "60%", left: "15%" },
    { size: 120, top: "75%", left: "80%" },
    { size: 90, top: "45%", left: "45%" },
    { size: 70, top: "85%", left: "10%" },
  ];

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {circles.map((circle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
        />
      ))}

      <div className="pad-x-xl py-16 flex justify-center relative">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-16 max-w-2xl">
          <h1 className="md:text-4xl text-2xl font-bold leading-snug">
            Your One-Stop Solution for Digital Needs.
          </h1>

          <Button
            size={"lg"}
            variant={"outline"}
            className="text-primary rounded-md font-semibold hover:text-primary/80"
            asChild
          >
            <Link href={"/pricing"}>Cek Harga</Link>
          </Button>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link
              href={"https://www.instagram.com/creatify.indonesia"}
              target="_blank"
              className="font-bold md:text-xl underline"
            >
              Instagram
            </Link>
            <Link
              href={"https://www.tiktok.com/@creatify.indonesia"}
              target="_blank"
              className="font-bold md:text-xl underline"
            >
              Tiktok
            </Link>
            <Link href={"#"} className="font-bold md:text-xl underline">
              Twitter
            </Link>
            <Link href={"#"} className="font-bold md:text-xl underline">
              LinkedIn
            </Link>
            <Link href={"#"} className="font-bold md:text-xl underline">
              Dribbble
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/20 pad-x-xl py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-sm">
          © {year} Creatify Indonesia. All rights reserved.
        </h1>
        <div className="flex gap-4 text-sm">
          <Link href={"#"} className="hover:underline">
            Terms of Service
          </Link>
          <Link href={"#"} className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
