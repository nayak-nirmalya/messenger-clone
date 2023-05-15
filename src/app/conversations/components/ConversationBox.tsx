"use client";

import { useRouter } from "next/navigation";
import { format } from "date-fns";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import React, { useCallback, useMemo } from "react";
import { Conversation, Message, User } from "@prisma/client";

import { FullConversationType } from "@/types";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected
}) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
