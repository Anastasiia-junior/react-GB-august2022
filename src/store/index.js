import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {profileReducer} from './profile-reducer';
import {chatReducer} from './chat-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { botMessage } from "./middlewares";
import thunk from 'redux-thunk';

export const store = createStore( combineReducers ( {
    profile: profileReducer,
    chat: chatReducer,
    dialogs: dialogsReducer
} ), 
compose(
    applyMiddleware(botMessage, thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (arg) => arg
    )
);


window.state = store;