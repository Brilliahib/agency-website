import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="pad-x-xl py-16 flex justify-center">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-16 max-w-2xl">
          <h1 className="md:text-4xl text-2xl font-bold leading-snug">
            Explore your potential and begin your journey today.
          </h1>

          <Button size={"lg"} variant={"outline"} className="text-black">
            Lets talk
          </Button>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link href={"#"} className="font-bold md:text-xl underline">
              Instagram
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
            <Link href={"#"} className="font-bold md:text-xl underline">
              Behance
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pad-x-xl py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-sm">© {year} Agency. All rights reserved.</h1>
        <div className="flex gap-4 text-sm">
          <Link href={"#"} className="hover:underline">
            Terms of Service
          </Link>
          <Link href={"#"} className="hover:underline">
            Privacy Policy
          </Link>
          <Link href={"#"} className="hover:underline">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
