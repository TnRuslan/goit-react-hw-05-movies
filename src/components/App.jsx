import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import css from './App.module.css';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

const NavItem = styled(NavLink)`
  font-size: 30px;
  padding: 20px;
  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/movies">Movies</NavItem>
          </nav>
        </div>
      </header>
      <div className={css.container}>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
