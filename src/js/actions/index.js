import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

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

// export function getData() {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       return { type: "DATA_LOADED", payload: json };
//     });
// }
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
// export function getData() {
//     return function(dispatch) {
//       return fetch("https://jsonplaceholder.typicode.com/posts") //have to explicitly call dispatch inside the async function to dispatch the action
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: "DATA_LOADED", payload: json })
//         });
//     };
//     // return {
//     //   type: "DATA_LOADED",
//     //   payload: payload
//     // }
//   }

// Now we're using redux-saga. That's why we're moving away async logic 
// export function getData() {
//   return { type: "DATA_REQUESTED" };
// }

//if you want to access the state inside the action creator you can add getState in the 
// parameters list, alongside dispatch

//with redux-thunk you can return functions from action creators, not only objects. You can do asynchronous 
// work inside your actions and dispatch other actions in response to AJAX calls

//Always remeber: the state in redux comes from reducers!
//The store is in charge of orchestrating all interactions in redux
//the reducer makes the state
//actions are plain JS objects with a type property and a payload
//action creators are a plain JS function in charge of returning Redux actions
//Middleware is a function that is able to intercept an action (and do something with it) before it reaches the reducer
//Middleware can hold the bulk of the appliation's logic
//While inside middleware you can access getState and dispatch
