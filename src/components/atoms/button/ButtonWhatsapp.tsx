"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/6281327059189"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-4"
    >
      <div className="rounded-full border bg-white px-6 py-2">
        <h1 className="text-sm font-semibold">Mau order?</h1>
      </div>

      <div className="relative flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg hover:bg-green-600">
        <div className="scale-1 absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20"></div>
        <Image
          src="/images/landing/whatsapp.png"
          alt="Whatsapp"
          width={1000}
          height={1000}
          className="max-w-[30px]"
        />
      </div>
    </Link>
  );
}
