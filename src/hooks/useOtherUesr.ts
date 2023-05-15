import { useMemo } from "react";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";

import { FullConversationType } from "@/types";

const useOtherUser = (
  conversation:
    | FullConversationType
    | {
        user: User[];
      }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const otherUser = conversation.user.filter(
      (user) => user.email !== currentUserEmail
    );

    return otherUser;
  }, [session?.data?.user?.email, conversation.user]);

  return otherUser;
};

export default useOtherUser;
