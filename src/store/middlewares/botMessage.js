import {SEND_MESSAGE, sendMessage} from '../dialogs-reducer';

export const botMessage = (store) => (next) => (action) => {
    if (action.type === SEND_MESSAGE && action.payload.message.author === 'user') {
        setTimeout(()=> {
            store.dispatch(sendMessage({
                author: 'bot',
                message: 'Hello from middleware'
            }, action.payload.userId))
        }, 500)
    }
    return next(action);
    
}