import gamesReducer from './gamesReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	games: gamesReducer,
});

export default rootReducers;
