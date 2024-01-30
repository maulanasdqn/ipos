import { ReactNode } from "react";

export default function DashboardDefaultLayout({
  children,
  card,
  chart,
}: {
  children: ReactNode;
  card: ReactNode;
  chart: ReactNode;
}) {
  return (
    <main className="flex w-full">
      {children}
      {card}
      {chart}
    </main>
  );
}
