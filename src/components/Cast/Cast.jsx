import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=3ff904f01b180e8aa08fc9b52d5b2a33&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setCast([...data.cast]);
      });
  }, [params.id]);

  return cast.length === 0 ? (
    <p>We don`t have any cast</p>
  ) : (
    <ul>
      {cast.map(cast => {
        return (
          <li key={cast.id}>
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
          </li>
        );
      })}
    </ul>
  );
};
