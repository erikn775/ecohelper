export default function upgradeReducer(state = {totalCost: 0, totalSavings: 0}, action){
    switch(action.type){
        case "MORE_MONEY": 
            return {...state, totalCost: state.totalCost + action.payload.cost, totalSavings: state.totalCost + action.payload.savings}
        case "LESS_MONEY":
           
            return {...state, totalCost: state.totalCost - action.payload.cost, totalSavings: state.totalCost - action.payload.savings }
        default:
            return state
    }
}

