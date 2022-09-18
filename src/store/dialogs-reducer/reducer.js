import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";
import { nanoid } from 'nanoid'

const initialState = {
    messageList: {
        1: [{ message: 'Hello', author: 'user', id: nanoid(), date: new Date() }, 
            { message: 'Hello', author: 'bot', id: nanoid(), date: new Date() }],
        2: [{ message: 'Hello', author: 'bot', id: nanoid(), date: new Date() }],
        3: [],
        4: []
    },
   
};

export const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SEND_MESSAGE: 
            return {
                ...state, 
                messageList: {
                    ...state.messageList,
                    [action.payload.userId]: [
                        ...(state.messageList[action.payload.userId] ?? []), 
                        { ...action.payload.message, id: nanoid(), date: new Date()}
                    ]
                }
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.userId] : state.messageList[action.payload.userId].filter(
                        (message) => message.id !== action.payload.messageId 
                    )
            }
                }
                
       
        default: 
            return state;
    }
};