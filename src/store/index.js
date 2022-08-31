import { createStore, combineReducers } from "redux";
import {profileReducer} from './profile-reducer';
import {chatReducer} from './chat-reducer';

export const store = createStore( combineReducers ( {
    profile: profileReducer,
    chat: chatReducer
} ));


window.state = store;