import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <section className="pad-x-xl pb-30 md:pt-38 pt-35 space-y-12">
      {children}
    </section>
  );
}
