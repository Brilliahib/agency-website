import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems } from "@/data/nav-item";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

function MobileLink({
  href,
  children,
  icon: Icon,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
          isActive && "bg-primary/10 font-semibold text-primary"
        )}
      >
        {Icon && <Icon className={cn("h-5 w-5", isActive && "text-primary")} />}
        <span>{children}</span>
      </Link>
    </SheetClose>
  );
}

export default function NavButton() {
  const pathname = usePathname();
  const isNavItemActive = useMemo(
    () => navItems.some((item) => pathname === item.href),
    [pathname]
  );

  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button size={"lg"} className="rounded-md">
              Let&apos;s talk
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center md:hidden">
        <Sheet>
          {/* Hamburger */}
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-full shrink-0 border-0 md:hidden"
            >
              <Menu
                style={{ height: "20px", width: "20px" }}
                className="h-24 w-24"
              />
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-left font-semibold"
              >
                <h1 className="font-semibold uppercase font-inter">Agency</h1>
              </Link>
            </SheetHeader>
            <nav className="px-6 space-y-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="competition" className="border-none">
                  <AccordionTrigger
                    className={cn(
                      "px-3 py-3 text-base font-medium rounded-lg hover:bg-accent hover:no-underline text-muted-foreground",
                      isNavItemActive && "text-primary font-semibold"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm">Layanan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-0 pl-8 ml-5 border-l-2">
                    {navItems.map((items) => (
                      <MobileLink
                        key={items.href}
                        href={items.href}
                        pathname={pathname}
                      >
                        {items.title}
                      </MobileLink>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <MobileLink href="/portfolio" pathname={pathname}>
                Portfolio
              </MobileLink>
              <MobileLink href="/about" pathname={pathname}>
                Tentang Kami
              </MobileLink>
              <MobileLink href="/pricing" pathname={pathname}>
                Harga
              </MobileLink>
            </nav>
            <SheetFooter>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 text-left font-semibold"
              >
                <Button size={"lg"} className="rounded-md w-full">
                  Let&apos;s talk
                </Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
