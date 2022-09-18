export const chatSelector = (state) => {
    return (state.chat.chatList ?? [])
};

export const selectedChatSelector = state => state.chat.selectedChat;