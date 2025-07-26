import { SaintGPTSidebar } from "@/components/SaintGPTSidebar";
import { SaintGPTMain } from "@/components/SaintGPTMain";

export default function SaintGPT() {
  return (
    <div className="min-h-screen bg-background flex">
      <SaintGPTSidebar />
      <SaintGPTMain />
    </div>
  );
}
