import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";

interface IParams {
  coversationId: string;
}

const ConversationID = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.coversationId);
  const messages = await getMessages(params.coversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default ConversationID;
