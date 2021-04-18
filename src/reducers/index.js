import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';

const rootReducers = combineReducers({
	games: gamesReducer,
	detail: detailReducer,
});

export default rootReducers;
