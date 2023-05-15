"use client";

import clsx from "clsx";

import EmptyState from "../components/EmptyState";
import useConversation from "@/hooks/useConversation";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div>
      <EmptyState />
    </div>
  );
};

export default Home;
