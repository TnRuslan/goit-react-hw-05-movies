import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../API';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    API.fetchMovieReviews(params.id).then(data => {
      setReviews([...data.results]);
    });
  }, [params.id]);

  return reviews.length === 0 ? (
    <p>We don`t have any reviews for this movie</p>
  ) : (
    <ul className={css.reviews_list}>
      {reviews.map(review => {
        return (
          <li className={css.reviews_item} key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
