import { useState, useEffect, Suspense } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import css from './MovieDetails.module.css';
import { API } from '../../API';

const BackLink = styled(Link)`
  width: 60px;
  margin-top: 20px;
  display: block;
  padding: 10px;
  background-color: #b2f1ff;
  border-radius: 4px;
  border: 2px solid #004352;
  &:hover {
    background-color: #6ce4ff;
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  font-size: 20px;
  &.active {
    color: red;
  }
`;

const MovieDetails = () => {
  const movieId = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    API.fetchByMovieId(movieId.id).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    movie && (
      <div>
        <div>
          <BackLink to={location.state?.from ?? '/'}>Go back</BackLink>
        </div>
        <section className={css.section}>
          <div>
            <img
              className={css.movie_img}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
          </div>
          <div className={css.content}>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres:</h3>
            <ul>
              {movie.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </div>
        </section>
        <div>
          <h3 className={css.subtitle}>Additional information: </h3>
          <ul className={css.link_list}>
            <li>
              <StyledLink to="reviews" state={{ from: location }}>
                Reviews
              </StyledLink>
            </li>
            <li>
              <StyledLink to="cast" state={{ from: location }}>
                Cast
              </StyledLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<p>Loading details...</p>}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
