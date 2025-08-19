"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { pricingData } from "@/data/price";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";
import { useState } from "react";
import DialogDetailInfoOrder from "@/components/atoms/dialog/DialogDetailInfoOrder";

interface OrderWrapperProps {
  slug: string;
}

interface OrderFormValues {
  projectName: string;
  description: string;
  deadline: string;
  fullName: string;
  whatsapp: string;
}

export default function OrderWrapper({ slug }: OrderWrapperProps) {
  const priceItem = pricingData.find((item) => item.slug === slug);
  const { register, handleSubmit, reset } = useForm<OrderFormValues>();
  const [isDialogDetailOrderOpen, setIsDialogDetailOrderOpen] = useState(false);

  const onSubmit = (data: OrderFormValues) => {
    const phone = "6281327059189";
    const text = `Halo, saya ingin order *${priceItem?.title}*.

*Detail Project*
- Pilihan Order: ${priceItem?.title}
- Nama Project: ${data.projectName}
- Deskripsi: ${data.description}
- Deadline: ${data.deadline}

*Data Pemesan*
- Nama Lengkap: ${data.fullName}
- No. WhatsApp: ${data.whatsapp}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    reset();
  };

  const handleDialogOpen = () => {
    setIsDialogDetailOrderOpen(true);
  };

  return (
    <>
      <section className="pad-x-xl md:py-36 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl font-inter">
              Order {priceItem?.title}
            </h1>
            <p className="text-muted-foreground">
              Silahkan isi form berikut untuk melanjutkan proses order.
            </p>
          </div>
          <Button
            variant={"outline"}
            className="rounded-md"
            onClick={handleDialogOpen}
          >
            <Info />
            Lihat Info Order
          </Button>
        </div>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectName">Nama Project</Label>
                <Input id="projectName" {...register("projectName")} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi Project</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  id="deadline"
                  type="date"
                  {...register("deadline")}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">Nama Lengkap</Label>
                <Input id="fullName" {...register("fullName")} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">No. WhatsApp</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  {...register("whatsapp")}
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size={"lg"} className="rounded-md">
                  Order Sekarang
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      <DialogDetailInfoOrder
        open={isDialogDetailOrderOpen}
        setOpen={setIsDialogDetailOrderOpen}
        data={priceItem!}
      />
    </>
  );
}
