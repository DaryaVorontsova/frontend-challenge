import React from 'react';
import { CatCard } from './CatsCard';

interface CatsListProps {
  cats: { id: string; url: string }[];
}

export const CatsList: React.FC<CatsListProps> = ({ cats }) => {
  return (
    <div className="cats-list">
      {cats.map(cat => (
        <CatCard key={cat.id} id={cat.id} imageUrl={cat.url} />
      ))}
    </div>
  );
};
