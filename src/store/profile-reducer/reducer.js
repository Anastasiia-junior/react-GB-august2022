import { CHECKED_CHECKBOX } from "./types";
const initialState = {
    checked: false
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKED_CHECKBOX: 
        return {
            ...state, 
            checked: !state.checked
        }
        
        default: 
            return state;
    }
};