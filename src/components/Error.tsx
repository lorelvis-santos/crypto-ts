import type { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return <div className="error">{children}</div>;
}
