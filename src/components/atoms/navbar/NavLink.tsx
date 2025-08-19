import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative px-4 py-2 text-sm font-inter uppercase font-semibold inline-block hover:text-primary",
        {
          "text-primary": active,
          "text-black": !active,
        }
      )}
    >
      <span className="relative">
        {label}
        <span
          className={cn(
            "absolute left-0 -bottom-2 h-[2px] bg-current transition-all duration-500 ease-out origin-left",
            {
              "w-full": active,
              "w-0 group-hover:w-full": !active,
            }
          )}
        />
      </span>
    </Link>
  );
}
