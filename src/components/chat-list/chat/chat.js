import { Avatar, ListItemText, ListItemAvatar, ListItemButton } from '@mui/material';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

export const Chat = memo((props) => {

    return (
        <NavLink to={`${props.chat.id}`} key={props.chat.id}>
        <ListItemButton
            key={props.chat.id}
            selected={props.selected}
            onClick={() => { props.handleListItemClick(props.chat.id) }}
        >
            <ListItemAvatar>
                <Avatar alt={props.chat.name} src="/static/images/avatar/2.jpg"></Avatar>
            </ListItemAvatar>
            <ListItemText>{props.chat.name}</ListItemText>
        </ListItemButton>
        </NavLink>
    )
})