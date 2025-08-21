import { Badge } from "@/components/ui/badge";
import PageContainer from "../../container/PageContainer";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceWebWrapper() {
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="space-y-6 flex flex-col md:justify-start justify-center md:items-start items-center md:text-left text-center">
          <Badge
            variant={"outline"}
            className="bg-secondary px-4 py-2 font-semibold text-sm rounded-full flex gap-3"
          >
            <Monitor className="h-4! w-4! text-primary" />
            Website Development
          </Badge>
          <h1 className="md:text-4xl text-2xl font-bold">
            Website Development Profesional untuk Bisnis Anda
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-base text-sm">
            Bangun kesan pertama yang kuat dengan website modern, cepat, dan
            mudah diakses dari berbagai perangkat.{" "}
            <span className="md:inline hidden">
              Kami tidak hanya membuat website, tetapi juga merancang pengalaman
              digital yang mampu meningkatkan kredibilitas, memperluas jangkauan
              pasar, dan mendorong pertumbuhan bisnis Anda.{" "}
            </span>{" "}
            Mari wujudkan ide Anda menjadi website yang memikat dan berdampak
            nyata!
          </p>
          <Button size={"lg"} className="rounded-md">
            Pelajari Lebih Lanjut
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/images/services/web-illustration.webp"}
            alt="Website Development"
            width={1000}
            height={1000}
            className="md:max-w-sm max-w-xs"
          />
        </div>
      </div>
    </PageContainer>
  );
}
