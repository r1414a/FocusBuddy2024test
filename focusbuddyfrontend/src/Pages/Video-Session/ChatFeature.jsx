import 'stream-chat-react/dist/css/v2/index.css';
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
  TypingIndicator
} from "stream-chat-react";
import { useState, useEffect, useContext } from "react";
import { myContext } from '../../utils/PrivateRoutes';
import ChatNotAvailable from './ChatNotAvailable';


const apiKey = import.meta.env.VITE_GETSTREAM_KEY;

export default function ChatFeature({ token, availableEvents }) {
  const { userProfile } = useContext(myContext);
  const userID = userProfile.displayName.split(' ').join('_');
  const other_user = availableEvents[0].matchedPersonFullName === 'Matching...' ? 'Matching' : availableEvents[0].matchedPersonFullName.split(' ').join('_');


  // Use the hook directly in the component's body
  const chatClient = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: {
      id: userID,
      role: "admin"
    }
  });
  console.log(chatClient)


  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const createChannel = async () => {
      if (chatClient) {
        const channel = chatClient.channel('messaging', {
          members: [userID, other_user]
        });

        await channel.watch();
        setChannel(channel);
      }
    };

    createChannel();

    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, [chatClient]);
console.log("chatclient",chatClient)
  if (!chatClient || !channel) return <ChatNotAvailable/>;

  return (
    <Chat client={chatClient}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader>
            <TypingIndicator/>
          </ChannelHeader>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
