import { ADD_CHAT, DELETE_CHAT, SELECTED_CHAT } from "./types";

export const addChat = () => {
  return { 
    type:  ADD_CHAT
  };
};

export const deleteChat = (idChat) => {
  return {
    type: DELETE_CHAT,
    payload: idChat
  }
}

export const setSelectedChat = (chatId) => {
  return {
    type: SELECTED_CHAT, 
    payload: chatId
  }
}
