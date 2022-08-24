import { useCallback, useState } from "react";
import { List} from '@mui/material';
import { Chat } from "./chat/chat";

export function ChatList() {

    const [chatList, setChatList] = useState([
        {
            id: 1,
            name: 'Ivan'
        },
        {
            id: 2,
            name: 'David'
        },
        {
            id: 3,
            name: 'Natasha'
        },
        {
            id: 4,
            name: 'Mark'
        },

    ]);

    const [selectedChat, setSelectedChat] = useState([0].id);

    const handleListItemClick = useCallback((chat) => {
        setSelectedChat(chat)
    }, [])

    return (
        <List component='nav'>
            {chatList.map((chat) => {

                return (<Chat 
                    key={chat.id} 
                    chat={chat}
                    selected={chat.id === selectedChat}
                    handleListItemClick={handleListItemClick}/>)
            })}

        </List>
    )
}