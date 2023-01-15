import { LinkList } from 'components/LinkList/LinkList';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=3ff904f01b180e8aa08fc9b52d5b2a33'
    )
      .then(res => res.json())
      .then(data => {
        setTrendingMovies([...data.results]);
      });
  }, []);

  return <LinkList movies={trendingMovies} />;
};
