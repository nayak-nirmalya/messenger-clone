"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import { useSession } from "next-auth/react";

import { Conversation, User } from "@prisma/client";
import useOtherUser from "@/hooks/useOtherUesr";
import Avatar from "@/app/components/Avatar";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/hooks/useActiveList";
import { pusherClient } from "@/libs/pusher";
import useConversation from "@/hooks/useConversation";

interface HeaderProps {
  conversation: Conversation & {
    user: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const session = useSession();
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const { conversationId, isOpen } = useConversation();

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  useEffect(() => {
    if (!pusherKey) return;

    pusherClient.subscribe(pusherKey);

    const typingHandler = () => {
      setTyping(true);

      const timeOut = setTimeout(() => setTyping(false), 2000);
    };

    pusherClient.bind("user:typing", typingHandler);

    return () => {
      pusherClient.unsubscribe(pusherKey);

      pusherClient.unbind("user:typing", typingHandler);
    };
  }, [pusherKey, conversationId]);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.user.length} Members`;
    }

    return isActive ? (typing ? "Typing..." : "Active") : "Offline";
  }, [conversation, isActive, typing]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        className="
        bg-white 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 lg:px-6
        py-3 px-4 
        justify-between 
        items-center 
        shadow-sm
      "
      >
        <div className="flex gap-3 items-center">
          <Link
            className="
                lg:hidden
                block
                text-sky-500
                hover:text-sky-600
                transition
                cursor-pointer
            "
            href="/conversations"
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.user} />
          ) : (
            <Avatar user={otherUser} />
          )}
          <div className="flex flex-col">
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>

        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="
            text-sky-500
            cursor-pointer
            hover:text-sky-600
            transition
        "
        />
      </div>
    </>
  );
};

export default Header;
