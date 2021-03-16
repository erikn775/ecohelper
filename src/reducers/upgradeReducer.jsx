export default function upgradeReducer(state = {total: 0}, action){
    switch(action.type){
        case "SOLAR":
            return{...state, total: state.total }
    }
}