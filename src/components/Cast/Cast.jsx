import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../API';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    API.fetchMovieCast(params.id).then(data => {
      setCast([...data.cast]);
    });
  }, [params.id]);

  return cast.length === 0 ? (
    <p>We don`t have any cast</p>
  ) : (
    <ul className={css.cast_list}>
      {cast.map(cast => {
        return (
          <li className={css.cast_item} key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : 'https://via.placeholder.com/100x150.png?text=Profile'
              }
              alt={cast.name}
              width="100"
            />
            <h3>{cast.name}</h3>
            <p>Character: {cast.character ?? ''}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
