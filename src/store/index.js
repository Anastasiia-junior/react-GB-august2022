import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {profileReducer} from './profile-reducer';
import {chatReducer} from './chat-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { botMessage } from "./middlewares";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { gistsReducer } from './gists-reducer/reducer';
import {getGistsApi, searchGistsByNameApi} from '../api/gists-request';

const api = {getGistsApi, searchGistsByNameApi};

// const persistConfig = {
//     key: 'root',
//     storage,
//   };

// const persistedReducer = persistReducer(
//     persistConfig, 
//     combineReducers ( {
//     profile: profileReducer,
//     chat: profileReducer,
//     gists: profileReducer, //сюда приходит стейт из диалогов
//     dialogs: dialogsReducer
    
// } ));



export const store = createStore( 
    combineReducers ( {
        profile: profileReducer,
        chat: chatReducer,
        gists: gistsReducer, //сюда приходит стейт из диалогов
        dialogs: dialogsReducer
        
    } ), 
compose(
    applyMiddleware(
        botMessage,
        thunk.withExtraArgument(api)
        ), 
        window.__REDUX_DEVTOOLS_EXTENSION__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (arg) => arg
    )
);


//export const persistor = persistStore(store);

window.state = store;