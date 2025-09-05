"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FormContact() {
  return (
    <Card>
      <CardContent>
        <form className="space-y-6 w-full">
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input id="name" placeholder="Masukkan nama" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Masukkan email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subjek</Label>
            <Input id="subject" placeholder="Subjek pesan" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Pesan</Label>
            <Textarea id="message" placeholder="Tulis pesanmu..." />
          </div>
          <div className="flex justify-end">
            <Button type="button" size={"lg"} className="rounded-md">
              Kirim Pesan
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
