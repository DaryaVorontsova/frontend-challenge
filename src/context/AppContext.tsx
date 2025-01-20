import React, { createContext, useContext, useState, useEffect } from 'react';

interface Cat {
  id: string;
  url: string;
}

interface AppStateContextType {
  allCats: Cat[];
  setAllCats: React.Dispatch<React.SetStateAction<Cat[]>>;
  favoriteCats: Cat[];
  toggleFavoriteCat: (cat: Cat) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error(
      'useAppState должен быть использован внутри AppStateProvider',
    );
  }

  return context;
};

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allCats, setAllCats] = useState<Cat[]>([]);
  const [favoriteCats, setFavoriteCats] = useState<Cat[]>([]);

  useEffect(() => {
    const savedFavoriteCats = localStorage.getItem('favoriteCats');

    if (savedFavoriteCats) {
      setFavoriteCats(JSON.parse(savedFavoriteCats));
    }
  }, []);

  useEffect(() => {
    if (favoriteCats.length > 0) {
      localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
    }
  }, [favoriteCats]);

  const toggleFavoriteCat = (cat: Cat) => {
    setFavoriteCats(prev =>
      prev.some(favCat => favCat.id === cat.id)
        ? prev.filter(favCat => favCat.id !== cat.id)
        : [...prev, cat],
    );
  };

  return (
    <AppStateContext.Provider
      value={{ allCats, setAllCats, favoriteCats, toggleFavoriteCat }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
