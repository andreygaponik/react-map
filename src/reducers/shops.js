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
	]
}

export default function shops(state = initialState) {
  return state;
}