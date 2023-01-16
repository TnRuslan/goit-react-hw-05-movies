import { LinkList } from 'components/LinkList/LinkList';
import { useState, useEffect } from 'react';
import { API } from '../../API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then(data => {
      setTrendingMovies([...data.results]);
    });
  }, []);

  return <LinkList movies={trendingMovies} />;
};

export default Home;
