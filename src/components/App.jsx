import { Routes, Route } from 'react-router-dom';
import { Loyout } from './Loyout/Loyout';
import { Movies } from './pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route
            path="home"
            element={
              <div>
                <h1>Home</h1>
              </div>
            }
          ></Route>
          <Route path="movies" element={<Movies />}></Route>
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
