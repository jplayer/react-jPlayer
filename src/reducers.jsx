import { combineReducers } from 'redux';
import jPlayerReducer from './reducers/jPlayerReducer';

export default combineReducers({ jPlayers: jPlayerReducer });
