import React from 'react';
import { useAppState } from '../context/AppContext';
import { CatsList } from '../components/CatsList';

export const FavoriteCats: React.FC = () => {
  const { favoriteCats } = useAppState();

  if (favoriteCats.length === 0) {
    return <p className="text">Вы еще не добавили котиков в избранное</p>;
  }

  return <CatsList cats={favoriteCats} />;
};
