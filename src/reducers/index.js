import { combineReducers } from 'redux'
import shops from './shops'
import pharmacies from './pharmacies'

export default combineReducers({
  shops,
  pharmacies
})