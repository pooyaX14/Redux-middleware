import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles:[],
    ll: ""
}

function rootReducer(state = initialState, action) {
    console.log(state)
    if(action.type === ADD_ARTICLE) {
        const newState = state.articles.concat(action.payload)
        return {
            ...state,
            articles: newState,
        }
        
    }
    else if(action.type === "FOUND_BAD_WORD") { 
        console.log(action)
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