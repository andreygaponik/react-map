import { 
	GET_LOCATION,
	FETCH_LOCATIONS_START,
	FETCH_LOCATIONS_ERROR,
	FETCH_LOCATIONS_SUCCESS } from '../actions/MainActions'

const initialState = {
  shops: [
		{
			position: new google.maps.LatLng(-25.363884, 130.044922),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-20.363883, 130.044921),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-20.363881, 136.044922),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-24.363885, 136.044923),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-25.363885, 133.044923),
			showInfo: false
		}
	],
	pharmacies: [
		{
			position: new google.maps.LatLng(-21.363882, 130.044922),
			showInfo: true
		},
		{
			position: new google.maps.LatLng(-20.363882, 134.044922),
			showInfo: true
		}
	],
	clubs: [
		{
			position: new google.maps.LatLng(-30.363882, 130.044922),
			showInfo: false
		}
	],
	test: [
		{
			position: new google.maps.LatLng(-30.363882, 130.044922),
			showInfo: false
		}
	],
	fetching: false
}


export default function places(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS_START:
      return { ...state, fetching: true }

    case FETCH_LOCATIONS_SUCCESS:
      return { ...state, test: action.payload, fetching: false }

    default:
      return state;
  }
}