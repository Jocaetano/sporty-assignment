import { useQueryState } from 'nuqs';

export const useSearch = () => {
  const [query, setQuery] = useQueryState('q');

  const handleSearch = (searchTerm: string | null) => {
    if (!searchTerm) {
      setQuery(null);
      return;
    }

    setQuery(searchTerm);
  };

  return { query: query ?? '', handleSearch };
};
