import { Badge } from "@/components/ui/badge";
import PageContainer from "../../container/PageContainer";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServicePosterWrapper() {
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="space-y-6 flex flex-col md:justify-start justify-center md:items-start items-center md:text-left text-center">
          <Badge
            variant={"outline"}
            className="bg-secondary px-4 py-2 font-semibold text-sm rounded-full flex gap-3"
          >
            <Monitor className="h-4 w-4 text-primary" />
            Poster Design
          </Badge>
          <h1 className="md:text-4xl text-2xl font-bold">
            Poster Kreatif untuk Promosi yang Berdampak
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-base text-sm">
            Poster yang menarik mampu menyampaikan pesan dengan cepat dan
            efektif.{" "}
            <span className="md:inline hidden">
              Kami menghadirkan desain poster yang kreatif, estetik, dan sesuai
              dengan identitas brand Anda. Dengan perpaduan tipografi, warna,
              dan visual yang kuat, poster Anda akan mampu menarik perhatian
              audiens sekaligus meningkatkan daya tarik promosi.
            </span>{" "}
            Saatnya buat promosi Anda lebih menonjol dengan poster profesional
            yang berkesan!
          </p>
          <Button size={"lg"} className="rounded-md">
            Desain Poster Sekarang
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/images/services/home/poster.svg"}
            alt="Poster Design"
            width={300}
            height={100}
            className="md:max-w-[300px] max-w-[200px]"
          />
        </div>
      </div>
    </PageContainer>
  );
}
