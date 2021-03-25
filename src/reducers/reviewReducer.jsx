export default function reviewReducer(state = {reviews: []}, action){
    switch(action.type){
        case "STORE_REVIEWS":
            return {...state, reviews: action.payload}
        default:
            return state
    }
}
