import { LinkList } from 'components/LinkList/LinkList';
import { useEffect } from 'react';
import { useState } from 'react';
import { API } from '../../API';

export const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);

  const onInputChange = e => {
    setMovieName(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setSearchName(movieName);
    setMovieName('');
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    API.fetchByMovieName(searchName).then(data => {
      setMovies([...data.results]);
    });
  }, [searchName]);

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movieName}
          onChange={onInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <LinkList movies={movies} />
    </div>
  );
};
