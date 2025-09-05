"use client";

import Typography from "@/components/atoms/typography/Typography";
import PageContainer from "../container/PageContainer";
import { Mail, MapPin, Phone } from "lucide-react";
import FormContact from "@/components/molecules/form/FormContact";
import { motion } from "framer-motion";

export default function ContactWrapper() {
  return (
    <PageContainer>
      <Typography
        badge="Kontak Kami"
        title="Kami Menunggu Pesan Anda!"
        description="Kami siap membantu Anda dengan layanan pembuatan website, aplikasi mobile, dan desain kreatif."
        icon={Phone}
      />

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex gap-6 items-center">
            <div className="md:p-6 p-4 rounded-xl bg-primary w-fit">
              <Phone className="text-white" />
            </div>
            <div className="space-y-2">
              <p className="md:font-medium">Nomor Telepon</p>
              <h1 className="md:text-xl font-semibold">+62 813-2705-9189</h1>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="md:p-6 p-4 rounded-xl bg-primary w-fit">
              <Mail className="text-white" />
            </div>
            <div className="space-y-2">
              <p className="md:font-medium">Email</p>
              <h1 className="md:text-xl font-semibold">
                creatifyindonesia@gmail.com
              </h1>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="md:p-6 p-4 rounded-xl bg-primary w-fit">
              <MapPin className="text-white" />
            </div>
            <div className="space-y-2">
              <p className="md:font-medium">Lokasi</p>
              <h1 className="md:text-xl font-semibold">
                Semarang, Central Java, Indonesia
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <FormContact />
        </motion.div>
      </div>
    </PageContainer>
  );
}
