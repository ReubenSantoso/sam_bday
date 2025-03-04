"use client";
import { Thread } from "@/components/assistant-ui/thread";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import InstructionsPanel from "@/components/assistant-ui/instructionpanel";

export default function Home() {
  const runtime = useChatRuntime({ api: "/api/chat" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <main className="h-dvh grid grid-cols-[1fr_300px] gap-x-4 px-4 py-4">
        {/* <ThreadList />  */} 
        <Thread />
        <InstructionsPanel />
      </main>
    </AssistantRuntimeProvider>
  );
}
