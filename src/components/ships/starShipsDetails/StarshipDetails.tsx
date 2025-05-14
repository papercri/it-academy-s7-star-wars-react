/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchStarshipDetails } from "../../../api/FetchStarshipDetails";
import { PilotsList } from "./PilotsList";
import { FilmsList } from "./FilmsList";


export const StarshipDetails = ({ id }: { id: string | undefined }) => {
  const [starship, setStarship] = useState<any>(null);

  useEffect(() => {
    fetchStarshipDetails(id).then(setStarship);
  }, [id]);

  if (!starship) return null;

  return (
    <section className="py-6 px-4">
      {starship.pilots.length > 0 && <PilotsList pilots={starship.pilots} />}
      {starship.films.length > 0 && <FilmsList films={starship.films} />}
    </section>
  );
};