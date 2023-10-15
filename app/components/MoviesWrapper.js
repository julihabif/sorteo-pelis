'use client'
import React, { useEffect, useState } from "react";
import MovieForm from "@/app/components/MovieForm";
import { v4 as uuidv4 } from 'uuid';
import Movie from "@/app/components/Movie";

export const MoviesWrapper = () => {
    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        setMovies(savedMovies);
    }, []);

    const addMovie = newMovie => {
        const newMovies = [...movies, { id: uuidv4(), movie: newMovie, watched: false, isEditing: false }];
        setMovies(newMovies);
        localStorage.setItem('movies', JSON.stringify(newMovies));
    }

    const toggleWatched = id => {
        if (movies.length === 0) {
            return [];
        }

        const newMovies = movies.map(movie => (movie.id === id ? { ...movie, watched: !movie.watched } : movie));
        setMovies(newMovies);
        localStorage.setItem('movies', JSON.stringify(newMovies));
    }

    const deleteMovie = id => {
        const newMovies = movies.filter(movie => movie.id !== id);
        setMovies(newMovies);
        localStorage.setItem('movies', JSON.stringify(newMovies));
    }

    const getRandomUnwatchedMovie = () => {
        const unwatchedMovies = movies.filter(movie => !movie.watched);
        if (unwatchedMovies.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * unwatchedMovies.length);
        return unwatchedMovies[randomIndex].movie;
    }

    const handleGetRandomUnwatchedMovie = () => {
        const randomMovie = getRandomUnwatchedMovie();
        if (randomMovie) {
            alert(randomMovie);
        }
    }

    return (
        <div className={'TodoWrapper'}>
            <h1>Películas</h1>
            <MovieForm addMovie={addMovie} />
            {Array.isArray(movies) && movies.length > 0 ? (
                <div>

                    {movies.map((movie, index) => (
                        <Movie
                            movie={movie}
                            key={index}
                            toggleWatched={toggleWatched}
                            deleteMovie={deleteMovie}
                        />
                    ))}

                        <button className={'random-btn'} onClick={handleGetRandomUnwatchedMovie}>
                            Peli random
                        </button>

                </div>
            ) : (
                <p className={'Todo'}>No hay películas en la lista.</p>
            )}
        </div>
    );
}
