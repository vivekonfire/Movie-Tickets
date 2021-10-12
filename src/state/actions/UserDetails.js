import { STORE_USER_DETAILS } from "../types";

export const UserDetails = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: STORE_USER_DETAILS,
            payload: formData,
        });
    } catch (err) {
        console.error(err);
    }
};
