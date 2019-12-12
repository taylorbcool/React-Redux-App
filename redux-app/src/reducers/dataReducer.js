import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/dataActions';
  
const initialState = {
    raceData: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
            ...state,
            isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
            ...state,
            raceData: {
                season: action.payload.MRData.RaceTable.Races[0].season,
                round: action.payload.MRData.RaceTable.Races[0].round,
                raceName: action.payload.MRData.RaceTable.Races[0].raceName,
                winner: action.payload.MRData.RaceTable.Races[0].Results[0],
                second: action.payload.MRData.RaceTable.Races[0].Results[1],
                third: action.payload.MRData.RaceTable.Races[0].Results[2]
            },
            isFetching: false,
            error: null
            };
        case FETCH_DATA_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
