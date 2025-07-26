import { Sidebar } from "@/components/Sidebar";
import { DashboardMain } from "@/components/DashboardMain";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <DashboardMain />
    </div>
  );
}
