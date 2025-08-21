import { Badge } from "@/components/ui/badge";
import PageContainer from "../../container/PageContainer";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceLogoWrapper() {
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="space-y-6 flex flex-col md:justify-start justify-center md:items-start items-center md:text-left text-center">
          <Badge
            variant={"outline"}
            className="bg-secondary px-4 py-2 font-semibold text-sm rounded-full flex gap-3"
          >
            <Monitor className="h-4 w-4 text-primary" />
            Logo Design
          </Badge>
          <h1 className="md:text-4xl text-2xl font-bold">
            Logo Profesional untuk Identitas Brand yang Kuat
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-base text-sm">
            Logo bukan sekadar gambar, melainkan identitas visual yang mampu
            merepresentasikan nilai, karakter, dan profesionalitas bisnis Anda.{" "}
            <span className="md:inline hidden">
              Dengan sentuhan desain yang unik dan berkelas, kami membantu Anda
              menciptakan logo yang mudah diingat, relevan dengan audiens, serta
              mendukung kredibilitas brand di mata pelanggan. Logo yang tepat
              akan menjadi investasi jangka panjang bagi perkembangan bisnis.
            </span>{" "}
            Saatnya bangun kesan pertama yang tak terlupakan dengan logo yang
            kuat dan elegan.
          </p>
          <Button size={"lg"} className="rounded-md">
            Pelajari Lebih Lanjut
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/images/services/home/logo.svg"}
            alt="Logo Design"
            width={400}
            height={300}
            className="md:max-w-[400px] max-w-[250px]"
          />
        </div>
      </div>
    </PageContainer>
  );
}
