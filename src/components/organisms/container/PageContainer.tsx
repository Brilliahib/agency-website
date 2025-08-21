import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return <section className="pad-x-xl py-30 space-y-12">{children}</section>;
}
