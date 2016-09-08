const initialState = {
	pharmacies: [
		{
			position: new google.maps.LatLng(-21.363882, 130.044922),
			showInfo: true
		},
		{
			position: new google.maps.LatLng(-20.363882, 134.044922),
			showInfo: true
		}
	]
}

export default function pharmacies(state = initialState) {
  return state;
}