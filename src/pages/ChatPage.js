
import { Layout, MessageList,  ChatList } from '../components';

export const ChatPage = () => {
    return (
        <Layout messages={<MessageList/>} chats={<ChatList/>}/>
    )
}