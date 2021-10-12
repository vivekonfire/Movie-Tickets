import { STORE_USER_DETAILS } from "../types";

const initialState = {
    user: {},
};
const GetMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_DETAILS:
            localStorage.setItem("name", action.payload.name);
            localStorage.setItem("number", action.payload.number);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("day", action.payload.day);
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default GetMoviesReducer;
