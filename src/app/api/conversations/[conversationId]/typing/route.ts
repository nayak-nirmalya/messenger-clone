import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import { pusherServer } from "@/libs/pusher";
import prisma from "@/libs/prismadb";

interface IParams {
  conversationId: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
    const { conversationId } = params;

    if (!currentUser?.id || !currentUser?.email)
      return new NextResponse("Unauthorized", { status: 401 });

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
      include: {
        user: true
      }
    });

    if (!conversation) return new NextResponse("Invalid ID!", { status: 400 });

    if (conversation.isGroup)
      return new NextResponse("Unsupported Conversation!", { status: 400 });

    const otherUser = conversation.user.filter(
      (user) => user.id !== currentUser.id
    );

    await pusherServer.trigger(otherUser[0].email!, "user:typing", {
      id: conversationId
    });

    return new NextResponse("User Typing.", { status: 200 });
  } catch (error: any) {
    console.error(error, "ERR_TYPING");
    return new NextResponse("Internal Error!", { status: 500 });
  }
}
