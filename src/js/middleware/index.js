import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';
import { addArticle, foundBadWord } from '../actions'

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
                if(foundWord.length){
                    return dispatch(foundBadWord("This is not allowed"))
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