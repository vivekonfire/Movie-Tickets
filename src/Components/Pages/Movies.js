import React, { useEffect } from "react";
import Box from "../MoviesComponent/Box";
import { connect } from "react-redux";
import { GetMovies } from "../../state/actions/GetMovies";

const Movies = ({ Movies: { movies }, GetMovies }) => {
    useEffect(() => {
        GetMovies();
        //eslint-disable-next-line
    }, []);
    return (
        <div className="flex flex-wrap text-white">
            {movies.length !== 0 &&
                movies.map((movie) => (
                    <Box key={movie.show.id} movie={movie} />
                ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    Movies: state.Movies,
});

export default connect(mapStateToProps, { GetMovies })(Movies);
