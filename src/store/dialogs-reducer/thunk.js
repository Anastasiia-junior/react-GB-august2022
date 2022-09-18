import { sendMessage } from "./action"

export const sendMessageWithBot = (message, userId ) => (dispatch) => {
    dispatch(sendMessage(message, userId));
}