
import React, { Suspense } from 'react';
import clsx from 'clsx';
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';




const Navigation = () => {
  const buildStyleClass = ({ isActive }) => clsx(style.link, isActive && style.active);

  return (
    <div className={style.container}>
      <NavLink className={buildStyleClass} to='/'>Home</NavLink>
      <NavLink className={buildStyleClass} to='/movies'>Movies</NavLink>
    </div>
  );
};

export default Navigation;
