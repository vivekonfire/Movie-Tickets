import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetMovie } from "../../state/actions/GetMovie";

const Movie = ({ match, Movie: { movie }, GetMovie }) => {
    useEffect(() => {
        GetMovie(match.params.id);

        //eslint-disable-next-line
    }, []);

    return (
        <>
            {movie !== null && (
                <div className="min-h-screen mx-32">
                    <div className="text-center text-4xl pt-12 pb-4">
                        {movie.name}
                    </div>
                    <div className="flex justify-evenly">
                        <img src={movie.image.medium} alt="movie" />
                        <div
                            className="mx-20 my-auto"
                            dangerouslySetInnerHTML={{ __html: movie.summary }}
                        />
                    </div>
                    <div className="flex justify-evenly mt-10">
                        <div className="bg-blue-500 rounded-lg h-80 w-2/5 px-10">
                            <p className="text-3xl mt-4 text-center">Info</p>
                            <p className="text-xl mt-4">
                                {" "}
                                Language: {movie.language}
                            </p>
                            <div className="flex text-xl mt-4">
                                Genres:{" "}
                                {movie.genres.map((genre) => (
                                    <p key={uuidv4()} className="mx-2">
                                        {genre}
                                    </p>
                                ))}
                            </div>
                            <p className="text-xl mt-4">
                                {" "}
                                Runtime: {movie.runtime} Minutes
                            </p>
                            <p className="text-xl mt-4"> Type: {movie.type}</p>
                            <p className="text-xl mt-4">
                                {" "}
                                Status: {movie.status}
                            </p>
                        </div>
                        <div className="bg-blue-500 rounded-lg w-2/5 px-10">
                            <p className="text-3xl mt-4 text-center">Timings</p>
                            <div className=" text-xl mt-4">
                                Dates:{" "}
                                {movie.schedule.days.map((day) => (
                                    <p key={uuidv4()} className="mx-2">
                                        {day}
                                    </p>
                                ))}
                            </div>
                            <p className="text-xl mt-4">
                                {" "}
                                Timing: {movie.schedule.time}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <a
                            href={movie.officialSite}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                type="button"
                                className="bg-blue-400 px-8 py-2 mt-6 mx-6"
                            >
                                Offical Site
                            </button>
                        </a>
                        <Link to={`/book/${match.params.id}`}>
                            <button
                                type="button"
                                className="bg-blue-400 px-8 py-2 mt-6 mx-6"
                            >
                                Book tickets
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    Movie: state.Movie,
});

export default connect(mapStateToProps, { GetMovie })(Movie);
