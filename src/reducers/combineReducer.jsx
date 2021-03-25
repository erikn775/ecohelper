import {combineReducers} from 'redux';
import upgradeReducer from './upgradeReducer';
import reviewReducer from './reviewReducer'

export default combineReducers({
    upgrades: upgradeReducer,
    reviews: reviewReducer
})