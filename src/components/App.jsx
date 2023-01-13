import { Routes, Route } from 'react-router-dom';
import { Loyout } from './Loyout/Loyout';
import { Movies } from './pages/Movies';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />} />
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
