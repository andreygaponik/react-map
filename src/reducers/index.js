import { combineReducers } from 'redux';
import shops from './shops';
import center from './center';
import places from './places'

import pharmacies from './pharmacies'; 

export default combineReducers({
  shops,
  pharmacies,
  center,
  places
})