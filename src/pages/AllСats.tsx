import React from 'react';
import { CatsList } from '../components/CatsList';
import { useCats } from '../hooks/useCats';

export const AllCats: React.FC = () => {
  const { cats, isLoading, error } = useCats();

  if (isLoading) {
    return <div className="loading text">Загрузка...</div>;
  }

  if (error) {
    return <div className="error text">{error}</div>;
  }

  return (
    <>
      <CatsList cats={cats} />
    </>
  );
};
