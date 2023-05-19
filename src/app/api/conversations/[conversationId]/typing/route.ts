import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import { pusherServer } from "@/libs/pusher";

interface IParams {
  conversationId: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
    const { conversationId } = params;

    if (!currentUser?.id || !currentUser?.email)
      return new NextResponse("Unauthorized", { status: 401 });

    await pusherServer.trigger(currentUser.email, "user:typing", {
      id: conversationId
    });

    return new NextResponse("User Typing.", { status: 200 });
  } catch (error: any) {
    console.error(error, "ERR_MESSAGES_SEEN");
    return new NextResponse("Internal Error!", { status: 500 });
  }
}
