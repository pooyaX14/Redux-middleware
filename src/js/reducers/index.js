import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
    articles:[],
    // message: ""
    errors: "",
    remoteArticles:[]
}

function rootReducer(state = initialState, action) {
    console.log(action)
    if(action.type === ADD_ARTICLE) {
        const newState = state.articles.concat(action.payload)
        return {
            ...state,
            articles: newState,
            // message: ""
            errors: ""
        }
        
    }
    // if(action.type === FOUND_BAD_WORD) {
    //     return {
    //         ...state,
    //         message: action.message
    //     }
    // }
    if (action.type === FOUND_BAD_WORD) {
        // console.log("error reducer run");
        // console.log(action.payload )
        return {
            ...state,
            errors: `you cannot enter the word ${action.payload}`
        }
        // return Object.assign({}, state, {
        //   errors: `you cannot enter the word ${action.payload}`
        // });
      }
      if(action.type === "DATA_LOADED") {
        //   console.log(action.payload)
          const apiData = state.remoteArticles.concat(action.payload)
        console.log(apiData)
          return {
              ...state,
              remoteArticles: apiData
          }
      }
      if(action.type === "API_ERRORED") {
          return {
              ...state,
              errors: action.payload
          }
      }
    return state;
}

export default rootReducer;

// return Object.assign({}, state, {
//     articles: state.articles.concat(action.payload)
//   });