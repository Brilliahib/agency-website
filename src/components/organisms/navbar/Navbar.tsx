"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import NavL from "@/components/atoms/navbar/NavL";
import NavButton from "@/components/atoms/navbar/NavButton";
import { NavLink } from "@/components/atoms/navbar/NavLink";
import NotificationBar from "@/components/molecules/notification/NotificationBar";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);

  // --- Notification state (single source of truth) ---
  const [notifVisible, setNotifVisible] = useState(false);
  const [notifHeight, setNotifHeight] = useState(0);
  const notifRef = useRef<HTMLDivElement | null>(null);

  // init: cek localStorage sekali saja di client
  useEffect(() => {
    const isClosed = localStorage.getItem("notifClosed") === "true";
    setNotifVisible(!isClosed);
  }, []);

  // ukur tinggi notif dengan ResizeObserver biar akurat saat responsive
  useEffect(() => {
    if (!notifVisible || !notifRef.current) {
      setNotifHeight(0);
      return;
    }
    const el = notifRef.current;

    const updateHeight = () => setNotifHeight(el.offsetHeight);
    updateHeight();

    const ro = new ResizeObserver(() => updateHeight());
    ro.observe(el);

    return () => ro.disconnect();
  }, [notifVisible]);

  // scroll hide/show navbar (hindari re-register listener)
  const lastScrollYRef = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsTop(y === 0);

      const last = lastScrollYRef.current;
      if (y > last && y > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNotifClose = useCallback(() => {
    localStorage.setItem("notifClosed", "true");
    setNotifVisible(false);
    setNotifHeight(0);
  }, []);

  return (
    <>
      {notifVisible && (
        <NotificationBar ref={notifRef} onClose={handleNotifClose} />
      )}

      {/* Navbar: diposisikan tepat di bawah notif via inline style top */}
      <div
        className={`fixed left-0 z-40 w-full transition-transform duration-500
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
          ${isTop ? "bg-transparent border-none shadow-none" : "bg-white"}
        `}
        style={{ top: notifVisible ? notifHeight : 0 }}
      >
        <div className="pad-x-xl flex justify-between py-4">
          <NavL />
          <nav className="hidden items-center font-semibold md:flex">
            <NavLink />
          </nav>
          <NavButton />
        </div>
      </div>
    </>
  );
}
