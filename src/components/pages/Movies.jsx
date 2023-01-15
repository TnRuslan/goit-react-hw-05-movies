import { LinkList } from 'components/LinkList/LinkList';
import { useEffect } from 'react';
import { useState } from 'react';

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
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3ff904f01b180e8aa08fc9b52d5b2a33&language=en-US&query=${searchName}`
    )
      .then(res => res.json())
      .then(data => {
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
