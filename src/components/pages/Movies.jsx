import { LinkList } from 'components/LinkList/LinkList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from '../../API';
import css from './Movies.module.css';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchNameByParams = searchParams.get('movie') ?? '';

  const onInputChange = e => {
    setMovieName(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ movie: movieName });
    setMovieName('');
  };

  useEffect(() => {
    if (!searchNameByParams) {
      setMovies([]);
      return;
    }
    API.fetchByMovieName(searchNameByParams).then(data => {
      setMovies([...data.results]);
    });
  }, [searchNameByParams]);

  return (
    <div>
      <form className={css.form} onSubmit={onSubmitForm}>
        <input
          className={css.input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movieName}
          onChange={onInputChange}
        />
        <button className={css.search_btn} type="submit">
          Search
        </button>
      </form>

      <LinkList movies={movies} />
    </div>
  );
};

export default Movies;
