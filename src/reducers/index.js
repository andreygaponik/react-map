import { combineReducers } from 'redux';
import center from './center';
import places from './places';

export default combineReducers({
  center,
  places
});