import { Badge } from "@/components/ui/badge";

interface TypographyProps {
  badge: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  position?: "center" | "left";
}

export default function Typography({
  badge,
  title,
  description,
  icon: Icon,
  position = "center",
}: TypographyProps) {
  const isLeft = position === "left";

  return (
    <div
      className={`space-y-4 md:space-y-6 flex flex-col justify-center ${
        isLeft ? "items-start text-left" : "items-center text-center"
      }`}
    >
      <Badge
        className="px-4 py-2 rounded-full bg-secondary flex items-center gap-2"
        variant="outline"
      >
        {Icon && <Icon className="w-4 h-4 shrink-0 text-primary" />}
        <span className="text-sm">{badge}</span>
      </Badge>

      <h1 className="md:text-4xl text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground max-w-md">{description}</p>
    </div>
  );
}
