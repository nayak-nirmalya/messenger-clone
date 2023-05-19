import { useEffect, useState } from "react";
import { Channel, Members } from "pusher-js";

import { pusherClient } from "@/libs/pusher";
import useTypingList from "./useTypingList";

const useTypingChannel = () => {
  const { set, add, remove } = useTypingList();
  const [typingChannel, setTypingChannel] = useState<Channel | null>(null);

  useEffect(() => {
    let channel = typingChannel;

    if (!channel) {
      channel = pusherClient.subscribe("typing-messenger");
      setTypingChannel(channel);
    }

    channel.bind("pusher:subscription_succeeded", (members: Members) => {
      const initialMembers: string[] = [];

      members.each((member: Record<string, any>) =>
        initialMembers.push(member.id)
      );

      set(initialMembers);
    });

    channel.bind("pusher:member_added", (member: Record<string, any>) => {
      add(member.id);
    });

    channel.bind("pusher:member_removed", (member: Record<string, any>) => {
      remove(member.id);
    });

    return () => {
      if (typingChannel) {
        pusherClient.unsubscribe("typing-messenger");
        setTypingChannel(null);
      }
    };
  }, [typingChannel, set, add, remove]);
};

export default useTypingChannel;
