import { User } from "@prisma/client";
import React from "react";

interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return <div>{user.name}</div>;
};

export default Avatar;
