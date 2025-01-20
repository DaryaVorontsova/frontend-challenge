import { useState, useEffect } from 'react';
import { fetchCatImages } from '../api/catsApi';
import { useAppState } from '../context/AppContext';

export const useCats = () => {
  const { allCats, setAllCats } = useAppState();
  const [isLoading, setIsLoading] = useState<boolean>(!allCats.length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (allCats.length > 0) {
      setIsLoading(false);

      return;
    }

    const loadCats = async () => {
      try {
        setIsLoading(true);

        const data = await fetchCatImages();

        setAllCats(data.map(({ id, url }) => ({ id, url })));
      } catch {
        setError('Не удалось загрузить данные. Попробуйте позже.');
      } finally {
        setIsLoading(false);
      }
    };

    loadCats();
  }, [allCats, setAllCats]);

  return { cats: allCats, isLoading, error };
};
