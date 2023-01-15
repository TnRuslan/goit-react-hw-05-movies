import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=3ff904f01b180e8aa08fc9b52d5b2a33&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        setReviews([...data.results]);
      });
  }, [params.id]);

  return reviews.length === 0 ? (
    <p>We don`t have any reviews for this movie</p>
  ) : (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
