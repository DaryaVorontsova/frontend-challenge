import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Все котики
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Любимые котики
      </NavLink>
    </header>
  );
};
