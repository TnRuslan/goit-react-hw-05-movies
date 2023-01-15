import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { API } from '../../API';

export const MovieDetails = () => {
  const movieId = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    API.fetchByMovieId(movieId.id).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    movie && (
      <div>
        <div>
          <NavLink to="/">Go back</NavLink>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
        />
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
        <div>
          <h3>Additional information: </h3>
          <ul>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  );
};
