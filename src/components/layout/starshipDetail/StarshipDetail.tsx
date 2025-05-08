/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./StarshipDetail.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchStarshipById } from "../../../api/FetchStarshipById"
function StarshipDetail() {

  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [starship, setStarship] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStarship = async () => {
      try {
        const data = await fetchStarshipById(id);
        setStarship(data);
        console.log(data);
        
      } catch (error) {
        console.error("Failed to load starship");
      } finally {
        setLoading(false);
      }
    };

    loadStarship();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96"> 
        <ScaleLoader color="#FFE81F" height={40} width={4} />
      </div>
    );
  }
  return (
    <main className="container fluid relative h-[80vh] mtop">
        <div className={styles.backgroundImage}></div>
        <div className={styles.starshipDetail}>
            <h1>STARSHIP</h1>
            
            <div className={styles.starshipContent}>
        
                <div className={styles.shipDetails}>
                    <h2>{starship.name}</h2>
                    <h3>Manufacturer:</h3>
                    <p>{starship.manufacturer}</p>
                
                    <div className={styles.specs}>
                        <div className={styles.specGroup}>
                        <h3>Model:</h3>
                        <p>{starship.model}</p>
                    </div>
                    
                    <div className={styles.specGroup}>
                    <h3>Passengers:</h3>
                    <p>{starship.passengers}</p>
                    </div>
                    
                    <div className={styles.specGroup}>
                    <h3>Cost in credits:</h3>
                    <p>{starship.cost_in_credits}</p>
                    </div>
                    
                    <div className={styles.specGroup}>
                    <h3>Length:</h3>
                    <p>{starship.length}</p>
                    </div>
                    
                    <div className={styles.specGroup}>
                    <h3>Atmospheric Speed:</h3>
                    <p>{starship.max_atmosphering_speed}</p>
                    </div>
                    
                    <div className={styles.specGroup}>
                    <h3>Crew:</h3>
                    <p>{starship.crew}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}
export default StarshipDetail