import data from '../data/data.json';
const str = JSON.parse(JSON.stringify(data));

const initialState = {
	shops: {
		position: [
			{
				pos: new google.maps.LatLng(-25.363882, 130.044922),
				stay: false
			},
			{
				pos: new google.maps.LatLng(-20.363882, 130.044922),
				stay: false
			},
			{
				pos: new google.maps.LatLng(-20.363882, 136.044922),
				stay: false
			},
			{
				pos: new google.maps.LatLng(-24.363882, 136.044922),
				stay: false
			}
		]
		},
		pharmacies: {
			"position": new google.maps.LatLng(-30.363882, 128.044922)
		}
}

console.log(initialState);

export default function mapState(state = initialState) {
  return state;
}