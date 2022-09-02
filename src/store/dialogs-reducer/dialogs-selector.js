export const messageSelector = (userId) => (state) => {
    return (state.dialogs.messageList[userId] ?? []);
}