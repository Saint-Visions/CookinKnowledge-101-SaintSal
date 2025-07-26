import { SaintVisionSidebar } from "@/components/SaintVisionSidebar";
import { SaintVisionDashboard } from "@/components/SaintVisionDashboard";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex">
      <SaintVisionSidebar />
      <SaintVisionDashboard />
    </div>
  );
}
