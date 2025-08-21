import Image from "next/image";
import PageContainer from "../container/PageContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundWrapper() {
  return (
    <PageContainer>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="space-y-8 flex flex-col justify-center items-center">
          <Image
            src={"/images/landing/404.svg"}
            alt="Not Found"
            width={500}
            height={300}
          />
          <Button asChild size={"lg"} className="rounded-md">
            <Link href="/">Kembali</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
