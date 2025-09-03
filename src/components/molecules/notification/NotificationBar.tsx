"use client";

import { forwardRef } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface NotificationBarProps {
  onClose?: () => void;
}

const NotificationBar = forwardRef<HTMLDivElement, NotificationBarProps>(
  ({ onClose }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full bg-primary text-white px-6 py-2 flex items-center justify-between text-sm z-50"
      >
        <p className="text-center w-full md:pr-0 pr-4">
          Ada harga khusus Mahasiswa nih!👀 Langsung cek{" "}
          <Link href="/pricing" className="font-medium underline">
            disini aja!
          </Link>
        </p>
        <button
          onClick={onClose}
          className="absolute right-4"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }
);

NotificationBar.displayName = "NotificationBar";
export default NotificationBar;
