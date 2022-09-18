import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR, 
    START_SEARCH_GISTS_BY_NAME, SUCCESS_SEARCH_GIST_BY_NAME, ERROR_SEARCH_GISTS_BY_NAME } from "./types";


const initialState = {
    gistsArray: [],
    pending: false,
    error: null,

    gistsByName: [],
    searchPending: false,
    searchError: null
};

export const gistsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_GISTS_START:
            return {
                ...state,
                pending: true,
                error: null
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state, 
                pending: false,
                gistsArray: action.payload
            };
        case GET_GISTS_ERROR:
            return {
                ...state, 
                pending: false,
                error: action.payload
            };
        case START_SEARCH_GISTS_BY_NAME: 
            return {
                ...state, 
                searchPending: true,
                searchError: null
            }
        case SUCCESS_SEARCH_GIST_BY_NAME: 
            return {
                ...state,
                searchPending: false,
                gistsByName: action.payload
            }
        case ERROR_SEARCH_GISTS_BY_NAME: 
        return {
            ...state,
            searchPending: false,
            searchError: action.payload
        }
        default:
            return state;
    }
};