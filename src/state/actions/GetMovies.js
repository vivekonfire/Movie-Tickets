import axios from "axios";
import { GET_MOVIES } from "../types";

export const GetMovies = () => async (dispatch) => {
    try {
        const res = await axios.get(
            "https://api.tvmaze.com/search/shows?q=all"
        );
        dispatch({
            type: GET_MOVIES,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
