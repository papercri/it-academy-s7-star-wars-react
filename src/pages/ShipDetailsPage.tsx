import Navbar from "../components/layout/header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function ShipDetailsPage() {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [starship, setStarship] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShip = async (id: string | undefined) => {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
        const data = await res.json();
        setStarship(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching starship:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShip(id);
  }, );

  if (loading) return 
    <div className="container mx-auto flex justify-center items-center h-screen ">
      <ScaleLoader color="#0066ff" height={40} width={4} />
    </div>;
  if (!starship) return <p>No ship found.</p>;
  return (
    <>
    <Navbar></Navbar>
    <div className="container text-center">
      <h1 className="text-2xl font-bold mb-6 mt-4 !text-center">{starship.name}</h1>
      <ul className="space-y-2">
        <li><strong>Model:</strong> {starship.model}</li>
        <li><strong>Manufacturer:</strong> {starship.manufacturer}</li>
        <li><strong>Passengers:</strong> {starship.passengers}</li>
        <li><strong>Starship Class:</strong> {starship.starship_class}</li>
      </ul>
    </div>
      
  </>
  )
}

export default ShipDetailsPage