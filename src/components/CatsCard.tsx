import React, { useState } from 'react';
import { useAppState } from '../context/AppContext';

interface CatCardProps {
  imageUrl: string;
  id: string;
}

export const CatCard: React.FC<CatCardProps> = ({ imageUrl, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { favoriteCats, toggleFavoriteCat } = useAppState();

  const isFavorite = favoriteCats.some(cat => cat.id === id);

  const toggleFavorite = () => {
    toggleFavoriteCat({ id, url: imageUrl });
  };

  return (
    <div
      className={`cat-card ${isHovered || isFavorite ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img src={imageUrl} alt="Кот" className="cat-image" />
        {(isHovered || isFavorite) && (
          <button
            onClick={toggleFavorite}
            className={`heart-icon ${isFavorite ? 'clicked' : ''}`}
          ></button>
        )}
      </div>
    </div>
  );
};
