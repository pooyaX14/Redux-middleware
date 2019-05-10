import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
    articles:[],
    message: ""
}

function rootReducer(state = initialState, action) {
    if(action.type === ADD_ARTICLE) {
        const newState = state.articles.concat(action.payload)
        return {
            ...state,
            articles: newState,
            message: ""
        }
        
    }
    else if(action.type === FOUND_BAD_WORD) {
        return {
            ...state,
            message: action.message
        }
    }
    return state;
}

export default rootReducer;

// return Object.assign({}, state, {
//     articles: state.articles.concat(action.payload)
//   });