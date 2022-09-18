import { DELETE_CHAT, ADD_CHAT, SELECTED_CHAT } from "./types";

const initialState = {
    chatList: [
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

    ],
    selectedChat: 1
    
};

export const chatReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_CHAT: 
            return {
                ...state, 
                //реализую после добавления редьюсеров других страниц
            }
        case DELETE_CHAT:
            return {
                ...state,
                //реализую после добавления редьюсеров других страниц
            }
        case SELECTED_CHAT:
            return {
                ...state, 
                selectedChat: action.payload
            }
        default: 
            return state;
    }
};