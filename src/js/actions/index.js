import { ADD_ARTICLE } from "../constants/action-types";

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

export function foundBadWord(message) {
    console.log(message)
    return {
        type: "FOUND_BAD_WORD",
        message: message
    }
}