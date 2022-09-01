import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (message, userId) => {
  return { 
    type:  SEND_MESSAGE,
    payload: {message, userId}
  };
};

export const deleteMessage = (idMessage) => {
  return {
    type: DELETE_MESSAGE,
    payload: idMessage
  }
}


