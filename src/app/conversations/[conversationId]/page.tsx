interface IParams {
  coversationId: string;
}

const ConversationID = async ({ params }: { params: IParams }) => {
  return <div>ConversationID</div>;
};

export default ConversationID;
