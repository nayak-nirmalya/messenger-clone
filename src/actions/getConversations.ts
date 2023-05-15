import prisma from "@/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return [];

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: { lastMessageAt: "desc" },
      where: {
        userIds: { has: currentUser.id }
      },
      include: {
        user: true,
        messages: {
          include: {
            sender: true,
            seen: true
          }
        }
      }
    });

    return conversations;
  } catch (error: any) {
    return [];
  }
};
