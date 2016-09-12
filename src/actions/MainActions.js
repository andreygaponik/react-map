export const FETCH_LOCATIONS_START = 'FETCH_LOCATIONS_START';
export const FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const GET_LOCATION = 'GET_LOCATION';
export const UPDATE_LOCATIONS = 'UPDATE_LOCATIONS';

export function getPlaces(test) {
  return (dispatch) => {
    dispatch({
      type: FETCH_LOCATIONS_START,
      fetching: true
    });

    dispatch({
      type: FETCH_LOCATIONS_SUCCESS,
      payload: test
    });
  }
}

