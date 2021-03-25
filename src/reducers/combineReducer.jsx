import {combineReducers} from 'redux';
import upgradeReducer from './upgradeReducer';
import reviewReducer from './reviewReducer';
import tipsReducer from './tipsReducer.jsx';

export default combineReducers({
    upgrades: upgradeReducer,
    reviews: reviewReducer,
    tips: tipsReducer
})