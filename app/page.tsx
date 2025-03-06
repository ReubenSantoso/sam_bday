"use client";
import { useState } from "react";
import { Thread } from "@/components/assistant-ui/thread";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import InstructionsPanel from "@/components/assistant-ui/instructionpanel";
import { Menu } from "lucide-react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  const runtime = useChatRuntime({ api: "/api/chat" });
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <main className="w-full h-screen flex">
        
        {/* Instructions Sidebar */}
        <div
          className={`fixed top-0 left-0 w-80 h-screen bg-white shadow-md transition-transform duration-300 lg:relative lg:translate-x-0 ${
            isInstructionsOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <InstructionsPanel />
        </div>

        <button
          className="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg lg:hidden"
          onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
        >
          <Menu />
        </button>

        {/* Chat Area (Flexible) */}
        <div className="flex-1 p-4">
          <Thread />
          <Analytics />
          <SpeedInsights />
        </div>
        
      </main>
    </AssistantRuntimeProvider>
  );
}
