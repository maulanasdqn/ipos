import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <main className="flex w-full bg-gray-200">
      <section className="flex">
        {sidebar && <div className="w-fit">{sidebar}</div>}
        <div className="w-full p-6">{children}</div>
      </section>
    </main>
  );
}
