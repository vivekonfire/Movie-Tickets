import { combineReducers } from "redux";
import GetMovies from "./GetMovies";
import UserDetails from "./UserDetails";
import GetMovie from "./GetMovie";

const RootReducer = combineReducers({
    Movies: GetMovies,
    Movie: GetMovie,
    UserDetails: UserDetails,
});

export default RootReducer;
