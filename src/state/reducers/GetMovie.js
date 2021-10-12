import { GET_MOVIE } from "../types";

const initialState = {
    movie: null,
};
const GetMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        default:
            return state;
    }
};

export default GetMoviesReducer;
