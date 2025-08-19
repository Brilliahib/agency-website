"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavLink() {
  const [mainTitle, setMainTitle] = React.useState("Web Application");
  const [mainDescription, setMainDescription] = React.useState(
    "Layanan pembuatan website profesional untuk meningkatkan bisnis Anda."
  );
  const [bgImage, setBgImage] = React.useState("/images/nav/web.jpg");
  const [fade, setFade] = React.useState(false);

  const handleHover = (title: string, description: string, image: string) => {
    setFade(true);
    setTimeout(() => {
      setMainTitle(title);
      setMainDescription(description);
      setBgImage(image);
      setFade(false);
    }, 200);
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 relative">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={`relative flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md bg-cover bg-center transition-all duration-500 ${
                      fade ? "opacity-0" : "opacity-100"
                    }`}
                    style={{ backgroundImage: `url(${bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-md pointer-events-none"></div>
                    <div className="relative z-10 mt-4 mb-2 text-lg font-medium text-white transition-opacity duration-500">
                      {mainTitle}
                    </div>
                    <p className="relative z-10 text-sm leading-tight font-normal text-white transition-opacity duration-500">
                      {mainDescription}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem
                href="/services/mobile"
                title="Mobile Application"
                onHover={() =>
                  handleHover(
                    "Mobile Application",
                    "Pengembangan aplikasi mobile yang responsif dan user-friendly.",
                    "/images/nav/mobile.jpg"
                  )
                }
              >
                Layanan pengembangan aplikasi mobile yang responsif dan
                user-friendly.
              </ListItem>

              <ListItem
                href="/services/web"
                title="Web Application"
                onHover={() =>
                  handleHover(
                    "Web Application",
                    "Layanan pembuatan website profesional untuk meningkatkan bisnis Anda.",
                    "/images/nav/web.jpg"
                  )
                }
              >
                Layanan pembuatan website profesional untuk meningkatkan bisnis
                Anda.
              </ListItem>

              <ListItem
                href="/services/ui-ux"
                title="UI/UX"
                onHover={() =>
                  handleHover(
                    "UI/UX",
                    "Desain antarmuka dan pengalaman pengguna yang menarik dan intuitif.",
                    "/images/nav/ui-ux.jpg"
                  )
                }
              >
                Layanan pembuatan desain antarmuka dan pengalaman pengguna yang
                menarik dan intuitif.
              </ListItem>

              <ListItem
                href="/services/logo"
                title="Logo Design"
                onHover={() =>
                  handleHover(
                    "Logo Design",
                    "Desain logo yang menarik dan sesuai dengan identitas merek Anda.",
                    "/images/nav/logo.jpg"
                  )
                }
              >
                Layanan pembuatan desain logo yang menarik dan sesuai dengan
                identitas merek Anda.
              </ListItem>

              <ListItem
                href="/services/poster"
                title="Poster"
                onHover={() =>
                  handleHover(
                    "Poster",
                    "Desain poster yang menarik dan sesuai dengan identitas merek Anda.",
                    "/images/nav/poster.jpg"
                  )
                }
              >
                Layanan pembuatan desain poster yang menarik dan sesuai dengan
                identitas merek Anda.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/portfolio">Portfolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">Tentang Kami</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/pricing">Harga</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  href: string;
  title: string;
  onHover?: () => void;
  children: React.ReactNode;
}

function ListItem({ title, children, href, onHover, ...props }: ListItemProps) {
  return (
    <li {...props} onMouseEnter={onHover}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug font-normal">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
