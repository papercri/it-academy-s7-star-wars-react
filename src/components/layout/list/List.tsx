import styles from "./List.module.scss";
import { useEffect, useState } from "react";
import { fetchStarships } from "../../../api/FetchStarships";
import StarshipsCard from "../card/Card";
import { Starship } from "../../../types/Interfaces";
import ScaleLoader from "react-spinners/ScaleLoader";


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

  if (loading) return <div className="container mx-auto flex justify-center items-center h-screen ">
    
    <ScaleLoader color="#0066ff" height={40} width={4} />
  </div>;

  return (
    <div className="container xs mx-auto grid grid-cols-1  gap-4 p-4 !my-6">
      {starships.map((ship) => (
        <StarshipsCard key={ship.name} name={ship.name} model={ship.model} />
      ))}
    </div>
  );
};

export default StarshipsList;