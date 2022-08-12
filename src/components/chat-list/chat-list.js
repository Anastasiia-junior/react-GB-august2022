import { useState } from "react";
import { List, ListItem, Avatar, ListItemText, ListItemAvatar } from '@mui/material';
//import { Chat } from "./chat/chat";

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


    return (
        <List>
            {chatList.map((chat) => {

                return (<ListItem key={chat.id}>
                    <ListItemAvatar>
                        <Avatar alt={chat.name} src="/static/images/avatar/2.jpg"></Avatar>
                    </ListItemAvatar>
                    <ListItemText>{chat.name}</ListItemText>
                </ListItem>)
            })}

        </List>
    )
}