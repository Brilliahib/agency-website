import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PricingItem } from "@/data/price";

interface DialogDetailInfoOrderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: PricingItem;
}

export default function DialogDetailInfoOrder({
  open,
  setOpen,
  data,
}: DialogDetailInfoOrderProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Informasi Order</DialogTitle>
          <DialogDescription>
            Berikut adalah detail informasi order Anda.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 bg-secondary rounded-md p-4">
          <div className="space-y-1">
            <h1 className="font-semibold">{data.title}</h1>
            <p className="text-muted-foreground">{data.description}</p>
          </div>
          <div className="space-y-2">
            <span className="text-muted-foreground text-sm">Mulai dari</span>
            <h1 className="font-bold text-2xl">{data.price}</h1>
          </div>

          <div className="space-y-2">
            <h1>Layanan yang didapatkan:</h1>
            <ul className="list-disc list-inside text-sm space-y-1">
              {data.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
