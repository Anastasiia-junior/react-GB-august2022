import { useCallback } from "react";
import { List } from '@mui/material';
import { Chat } from "./chat/chat";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from '../../store/chat-reducer';




export function ChatList() {

    const chatList = useSelector(state => state.chat.chatList);
    const selectedChat = useSelector(state => state.chat.selectedChat);
    const dispatch = useDispatch();


    const handleListItemClick = useCallback((chatId) => {
        dispatch(setSelectedChat(chatId));
    }, [])




    return (
        <>
            <List component='nav'>
                {chatList.map((chat) => {
                    return (
                        <Chat
                            key={chat.id}
                            chat={chat}
                            selected={chat.id === selectedChat}
                            handleListItemClick={handleListItemClick}
                        />
                    )
                })}

            </List>


        </>

    )
}