"use client";

import { User } from "@prisma/client";
import React from "react";

interface GroupChatModalProps {
  users: User[];
  isOpen: boolean;
  onClose: () => void;
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users
}) => {
  return <div>GroupChatModal</div>;
};

export default GroupChatModal;
