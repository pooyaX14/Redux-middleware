import { ADD_ARTICLE } from '../constants/action-types';
import { foundBadWord } from '../actions'

//Middleware is a function that is able to intercept an action (and do something with it) before it reaches the reducer
//Middleware can hold the bulk of the appliation's logic
//While inside middleware you can access getState and dispatch

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}) {
    // console.log({dispatch})
    return function(next) {
        // console.log("next")
        // console.log({next});
        return function(action) {
            console.log(action)
            if(action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter((word) => action.payload.title.includes(word))
                console.log(foundWord)
                if(foundWord.length){
                    //Replaced FOUND_BAD_WORD action type with the foundBadWord action creator. Earlier it was 
                    // 1. return dispatch({type: FOUND_BAD_WORD, message: "This word not allowed"}) 
                            // OR  Created actionCreator foundBadWord() function which accept a string.
                    // 2. return dispatch(foundBadWord("This word is not allowed"))
                            // OR
                    return dispatch(foundBadWord(foundWord))
                    // return dispatch()
                }
                // else {
                //     return dispatch(addArticle())
                // }
            }
            console.log(action)
            return next(action)
            
        }
    }
}