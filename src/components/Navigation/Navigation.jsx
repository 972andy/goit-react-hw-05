
import React, { Suspense } from 'react';
import clsx from 'clsx';
import style from './Navigation.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';


const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = React.lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = React.lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = React.lazy(() => import('../MovieReviews/MovieReviews'));

const Navigation = () => {
  const buildStyleClass = ({ isActive }) => clsx(style.link, isActive && style.active);

  return (
    <div className={style.container}>
      <NavLink className={buildStyleClass} to='/'>Home</NavLink>
      <NavLink className={buildStyleClass} to='/movies'>Movies</NavLink>

      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Navigation;
