import { Badge } from "@/components/ui/badge";

interface TypographyProps {
  badge: string;
  title: string;
  description: string;
  icon?: React.ElementType;
}

export default function Typography({
  badge,
  title,
  description,
  icon: Icon,
}: TypographyProps) {
  return (
    <div className="space-y-4 md:space-y-6 flex flex-col justify-center text-center items-center">
      <Badge
        className="px-4 py-2 rounded-full bg-secondary text-sm flex items-center gap-2"
        variant="outline"
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        {badge}
      </Badge>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground max-w-md">{description}</p>
    </div>
  );
}
