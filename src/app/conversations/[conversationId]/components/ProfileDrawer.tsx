"use client";

import { Conversation, User } from "@prisma/client";
import React from "react";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: Conversation & {
    user: User[];
  };
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  data
}) => {
  return <div>ProfileDrawer</div>;
};

export default ProfileDrawer;
