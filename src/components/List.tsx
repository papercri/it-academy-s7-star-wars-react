import { useEffect, useState } from "react";

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const res = await fetch("https://swapi.py4e.com/api/starships/");
        const data = await res.json();
        setStarships(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {starships.map((ship) => (
        <li key={ship.name}>
          <h2>{ship.name}</h2>
          <p>Model: {ship.model}</p>
        </li>
      ))}
    </ul>
  );
};

export default StarshipsList;
