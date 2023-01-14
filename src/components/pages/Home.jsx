import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=3ff904f01b180e8aa08fc9b52d5b2a33'
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setTrendingMovies([...data.results]);
      });
  }, []);

  return (
    <ul>
      {trendingMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
