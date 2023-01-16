import { Link, useLocation } from 'react-router-dom';
import css from './LinkList.module.css';
import PropTypes from 'prop-types';

export const LinkList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => {
        return (
          <li className={css.list_item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

LinkList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
