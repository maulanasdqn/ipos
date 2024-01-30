import { Sidebar } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

export default async function DashboardSidebarDefaultPage() {
  const session = await auth();
  console.log("Data from sesseion SSR", session);
  return (
    <Suspense fallback={"Loading..."}>
      <Sidebar user={session?.user!} />
    </Suspense>
  );
}
