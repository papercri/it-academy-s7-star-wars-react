
import { useEffect, useState } from "react";
import { fetchStarships } from "../api/FetchStarships";
import StarshipsCard from "./card/Card";
import { Starship } from "../types/Interfaces";

const StarshipsList = () => {

  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStarships = async () => {
      try {
        const data = await fetchStarships();
        setStarships(data);
      } catch (error) {
        console.error("Error fetching Starships:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStarships();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {starships.map((ship) => (
        <StarshipsCard key={ship.name} name={ship.name} model={ship.model} />
      ))}
    </div>
  );
};

export default StarshipsList;