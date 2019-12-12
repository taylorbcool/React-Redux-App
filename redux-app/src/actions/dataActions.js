import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
// async action creator
export const getData = (year, round) => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    console.log('getData firing')
    axios
        .get(`http://ergast.com/api/f1/${year}/${round}/results.json`)
        .then(res => {
            // console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
        });
    };
