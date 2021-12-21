import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Box = ({ movie }) => {
  const id = movie.show.id.toString();

  return (
    <div className="mx-16 my-6 bg-blue-500 p-4 w-2/5">
      <div className="flex justify-evenly">
        <img className="" src={movie.show.image?.medium} alt="movie"></img>
        <div className="px-10 py-4 relative">
          <div className="text-3xl">{movie.show.name}</div>
          <div className="py-2">Rating : {movie.show.rating.average}</div>
          <div className="py-2">Running status : {movie.show.status}</div>
          <Link to={`/${id}`}>
            <button type="button" className="bg-blue-400 px-8 py-2 mt-6">
              Know More
            </button>
          </Link>
          <div className="absolute bottom-0 left-10 text-xs text-gray-900">
            <p>{movie.show.language}</p>
            <div className="flex">
              Genres:{" "}
              {movie.show.genres.map((genre) => (
                <p key={uuidv4()} className="mx-2">
                  {genre}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
