import { useEffect, useState } from "react";
import { fetchStarships } from "../../../api/FetchStarships";
import StarshipsCard from "./card/Card";
import { Starship } from "../../../types/Interfaces";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Link } from "react-router-dom";
import  Button  from "../../ui/Button/Button";


// Funcion para obtener el ID de la nave a partir de la URL
const getStarshipId = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

const StarshipsList = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadStarships = async () => {
    try {
      const { next, results } = await fetchStarships(page);
   
      if (!next) {
        setHasMore(false);
      }
  //actualiza el estado de starships sin duplicados (compara las URLs de las naves)
      setStarships((prev) => {
        const newShip: Starship[] = results.filter(
          (newShip: Starship) => !prev.some((existingShip: Starship) => existingShip.url === newShip.url)
        );
        return [...prev, ...newShip];
      });
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching Starships:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    
    }
  };

  useEffect(() => {
    loadStarships();
    
  }, []);

  useEffect(() => {
    console.log("Starships loaded:", starships);  
    // Este log se ejecutará solo cuando el estado cambie
  }, [starships]);

  if (loading && starships.length === 0) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96">
        <ScaleLoader color="#FFE81F" height={40} width={4} />
      </div>
    );
  }

  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
      <div className="grid grid-cols-1  gap-4">
        {starships.map((ship) => {
          const id = getStarshipId(ship.url);
          return (
            <Link key={id} to={`/starships/${id}`} className="!w-auto">
              <StarshipsCard name={ship.name} model={ship.model} />
            </Link>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6 ">
         
          <Button variant="primary" size="md" onClick={() => {
              setLoadingMore(true);
              loadStarships();
            }}>
            {loadingMore ? "Loading..." : "Show more"}
          </Button>
        </div>
      )}

      {!hasMore && (
        <div className="text-center mt-6 text-gray-500">
          You've reached the end of the list.
        </div>
      )}
    </main>
  );
};

export default StarshipsList;
