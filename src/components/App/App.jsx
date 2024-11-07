
import React, { Suspense } from 'react';

const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = React.lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = React.lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = React.lazy(() => import('../MovieReviews/MovieReviews'));

import { Route, Routes } from 'react-router-dom';


const Navigation = React.lazy(() => import('../Navigation/Navigation'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
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
}

export default App;

