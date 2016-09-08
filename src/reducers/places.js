const initialState = {
  shops: [
		{
			position: new google.maps.LatLng(-25.363882, 130.044922),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-20.363882, 130.044922),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-20.363882, 136.044922),
			showInfo: false
		},
		{
			position: new google.maps.LatLng(-24.363882, 136.044922),
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
			position: new google.maps.LatLng(-25.363882, 130.044922),
			showInfo: false
		}
	]
}

export default function places(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LOCATIONS_START':
      return { ...state, clubs: action.payload }

    default:
      return state;
  }
}