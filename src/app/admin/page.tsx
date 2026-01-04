import { prisma } from "@/lib/db";
import AdminClient from "./AdminClient";
import { checkAuth } from "./actions";
import AdminLogin from "./AdminLogin";

export default async function AdminPage() {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const items = await prisma.item.findMany({
    orderBy: { createdAt: "desc" },
  });

  const suggestions = await prisma.suggestedItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <AdminClient initialItems={items as any} initialSuggestions={suggestions as any} />
      </div>
    </div>
  );
}
