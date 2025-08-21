import { Badge } from "@/components/ui/badge";
import PageContainer from "../../container/PageContainer";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceMobileAppWrapper() {
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="space-y-6 flex flex-col md:justify-start justify-center md:items-start items-center md:text-left text-center">
          <Badge
            variant={"outline"}
            className="bg-secondary px-4 py-2 font-semibold text-sm rounded-full flex gap-3"
          >
            <Monitor className="h-4 w-4 text-primary" />
            Mobile Application
          </Badge>
          <h1 className="md:text-4xl text-2xl font-bold">
            Mobile Application Profesional untuk Bisnis Anda
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-base text-sm">
            Hadir lebih dekat dengan pelanggan melalui aplikasi mobile yang
            cepat, modern, dan mudah digunakan.{" "}
            <span className="md:inline hidden">
              Kami merancang dan membangun aplikasi mobile yang tidak hanya
              fungsional, tetapi juga memberikan pengalaman pengguna yang mulus,
              aman, dan mendukung pertumbuhan bisnis Anda.
            </span>{" "}
            Mari wujudkan ide Anda menjadi aplikasi mobile yang menarik dan
            berdampak nyata!
          </p>
          <Button size={"lg"} className="rounded-md">
            Pelajari Lebih Lanjut
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/images/services/home/mobile.svg"}
            alt="Mobile Application"
            width={300}
            height={100}
            className="md:max-w-[500px] max-w-[200px]"
          />
        </div>
      </div>
    </PageContainer>
  );
}
