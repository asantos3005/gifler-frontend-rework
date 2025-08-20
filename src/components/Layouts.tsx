import type { PropsWithChildren } from "react";

export function DefaultLayout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}

export function CenteredLayout({ children }: PropsWithChildren) {
  return <main className="centered">{children}</main>;
}

