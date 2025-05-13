
import { useState, useEffect } from "react";
import { fetchStarships } from "../api/FetchStarships";
import { Starship } from "../types/Interfaces";

export const useStarships = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadStarships = async () => {
    try {
      setLoadingMore(true);
      const { next, results } = await fetchStarships(page);

      if (!next) {
        setHasMore(false);
      }

      setStarships((prev) => {
        const newShips: Starship[] = results.filter(
            (ship: Starship) => !prev.some((s: Starship) => s.url === ship.url)
        );
        return [...prev, ...newShips];
      });

      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching starships:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadStarships();
  }, []);

  return {
    starships,
    loading,
    loadingMore,
    hasMore,
    loadMore: loadStarships,
  };
};
