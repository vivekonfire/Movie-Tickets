import axios from "axios";
import { GET_MOVIE } from "../types";

export const GetMovie = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        dispatch({
            type: GET_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
