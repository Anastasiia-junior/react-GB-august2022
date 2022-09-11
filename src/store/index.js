import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {profileReducer} from './profile-reducer';
import {chatReducer} from './chat-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { botMessage } from "./middlewares";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(
    persistConfig, 
    combineReducers ( {
    profile: profileReducer,
    chat: chatReducer,
    dialogs: dialogsReducer
} ));



export const store = createStore( 
    persistedReducer, 
compose(
    applyMiddleware(botMessage, thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (arg) => arg
    )
);


export const persistor = persistStore(store);

window.state = store;