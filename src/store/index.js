import { createStore, combineReducers } from "redux";
import {profileReducer} from './profile-reducer';
import {chatReducer} from './chat-reducer';
import { dialogsReducer } from './dialogs-reducer';

export const store = createStore( combineReducers ( {
    profile: profileReducer,
    chat: chatReducer,
    dialogs: dialogsReducer
} ));


window.state = store;