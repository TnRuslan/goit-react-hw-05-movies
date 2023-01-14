import { Routes, Route } from 'react-router-dom';
import { Loyout } from './Loyout/Loyout';
import { Movies } from './pages/Movies';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

//  '/'Layout
//   '/'Home (page)
//      "ul with movies"
//   '/'Movies (page)
//      "searh bar"
//      "/movies/reviews"
//      "/movies/cast"
//      "some movy"
