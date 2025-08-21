import { Badge } from "@/components/ui/badge";
import PageContainer from "../../container/PageContainer";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceUIUXWrapper() {
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="space-y-6 flex flex-col md:justify-start justify-center md:items-start items-center md:text-left text-center">
          <Badge
            variant={"outline"}
            className="bg-secondary px-4 py-2 font-semibold text-sm rounded-full flex gap-3"
          >
            <Monitor className="h-4 w-4 text-primary" />
            UI/UX Design
          </Badge>
          <h1 className="md:text-4xl text-2xl font-bold">
            UI/UX Design yang Memikat dan Fungsional
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-base text-sm">
            Ciptakan pengalaman digital yang menyenangkan dengan desain
            antarmuka yang modern, intuitif, dan user-friendly.{" "}
            <span className="md:inline hidden">
              Kami tidak hanya fokus pada estetika, tetapi juga bagaimana
              pengguna merasakan kemudahan dalam setiap interaksi. Dengan
              pendekatan berbasis riset dan kebutuhan pengguna, kami merancang
              solusi yang selaras dengan identitas brand sekaligus meningkatkan
              engagement.
            </span>{" "}
            Saatnya membuat produk Anda tampil profesional, mudah dipahami, dan
            memberi kesan mendalam bagi pengguna.
          </p>
          <Button size={"lg"} className="rounded-md">
            Pelajari Lebih Lanjut
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/images/services/home/ui-ux.svg"}
            alt="UI/UX Design"
            width={500}
            height={300}
            className="md:max-w-[500px] max-w-[250px]"
          />
        </div>
      </div>
    </PageContainer>
  );
}
