
import { useState, useEffect } from "react";
import { fetchStarshipById } from "../api/FetchStarshipById";
import { Starship } from "../types/Interfaces";

export const useStarshipCard = (id: string | undefined) => {
  const [starship, setStarship] = useState<Starship | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadStarship = async () => {
      try {
        const data = await fetchStarshipById(id);
        setStarship(data);
      } catch (error) {
        console.error("Failed to load starship", error);
      } finally {
        setLoading(false);
      }
    };

    loadStarship();
  }, [id]);

  return { starship, loading };
};
