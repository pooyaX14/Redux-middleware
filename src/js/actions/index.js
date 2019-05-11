import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

// export function addArticle(payload) {
//     return {
//         type: "ADD_ARTICLE",
//         payload: payload
//     }
// }

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload: payload
    }
}

// export function foundBadWord(message) {
//     console.log(message)
//     return {
//         type: "FOUND_BAD_WORD",
//         message: message
//     }
// }

export function foundBadWord(payload) {
    // console.log("foundbadword" + payload);
    return { 
        type: FOUND_BAD_WORD, 
        payload: payload
    };
}

//Always remeber: the state in redux comes from reducers!
//The store is in charge of orchestrating all interactions in redux
//the reducer makes the state
//actions are plain JS objects with a type property and a payload
//action creators are a plain JS function in charge of returning Redux actions
//Middleware is a function that is able to intercept an action (and do something with it) before it reaches the reducer
//Middleware can hold the bulk of the appliation's logic
//While inside middleware you can access getState and dispatch
