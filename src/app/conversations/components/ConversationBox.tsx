"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";

import { FullConversationType } from "@/types";

interface ConversationBoxProps {
  data: FullConversationType;
  selected: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected
}) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
