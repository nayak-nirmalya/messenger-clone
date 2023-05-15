"use client";

import React from "react";
import { Message, User } from "@prisma/client";

interface BodyProps {
  initialMessages: (Message & {
    seen: User[];
    sender: User;
  })[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  return <div className="flex-1 overflow-y-auto">Body</div>;
};

export default Body;
