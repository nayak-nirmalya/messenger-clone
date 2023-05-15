import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/actions/getConversations";

export const metadata = {
  title: "Conversations",
  description: "Full Stack Realtime Chat Web App."
};

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
