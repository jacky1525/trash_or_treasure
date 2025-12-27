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

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              ADMIN PANEL
            </h1>
            <p className="text-slate-400 font-medium">Eşya kataloğunu yönetin ve yeni hazineler ekleyin.</p>
          </div>
        </div>

        <AdminClient initialItems={items} />
      </div>
    </div>
  );
}
