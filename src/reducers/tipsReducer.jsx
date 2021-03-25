export default function reviewReducer(state = {tips: []}, action){
    switch(action.type){
        case "STORE_TIPS":
            return {...state, tips: action.payload}
        default:
            return state
    }
}