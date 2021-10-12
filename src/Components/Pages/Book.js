import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { GetMovie } from "../../state/actions/GetMovie";
import { UserDetails } from "../../state/actions/UserDetails";

const Book = ({ match, Movie: { movie }, GetMovie, UserDetails }) => {
    const [click, setClick] = useState(false);
    const [form, setForm] = useState({
        name: "",
        day: "",
        number: "",
        email: "",
    });

    const { name, number, email } = form;

    useEffect(() => {
        GetMovie(match.params.id);
        //eslint-disable-next-line
    });

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setClick(true);
        UserDetails(form);
    };

    return (
        <>
            {movie && (
                <div className="min-h-screen  justify-center">
                    <div className="pt-40 text-3xl text-center">
                        Movie name: {movie.name}
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col">
                        <input
                            type="text"
                            onChange={onChange}
                            name="name"
                            value={name}
                            className="px-4 py-2 mx-auto mt-6 w-96"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            onChange={onChange}
                            name="email"
                            value={email}
                            className="px-4 py-2 mx-auto mt-6 w-96"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            onChange={onChange}
                            name="number"
                            value={number}
                            className="px-4 py-2 mx-auto mt-6 w-96"
                            placeholder="Phone Number"
                        />
                        <p className="mx-auto mt-6">Day:</p>
                        <select
                            className="px-4 py-2 mx-auto w-96"
                            onChange={onChange}
                            name="day"
                        >
                            <option value="none" selected disabled hidden>
                                Choose here
                            </option>
                            {movie.schedule.days.map((d) => (
                                <option key={uuidv4()} value={d}>
                                    {d}
                                </option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="bg-blue-400 px-8 py-2 mt-6 mx-auto w-48 "
                        >
                            Book
                        </button>
                        {click && (
                            <div className="mt-6 text-lg mx-auto">
                                Thank You! Show Booked
                            </div>
                        )}
                    </form>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    Movie: state.Movie,
});

export default connect(mapStateToProps, { GetMovie, UserDetails })(Book);
