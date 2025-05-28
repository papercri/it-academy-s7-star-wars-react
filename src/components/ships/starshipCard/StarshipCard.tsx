/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./StarshipCard.module.scss";
import { useParams } from "react-router-dom";
import { useStarshipCard } from "../../../hooks/useStarshipCard";
import ScaleLoader from "react-spinners/ScaleLoader";
import { StarshipDetails } from "../starShipsDetails/StarshipDetails";

function StarshipCard() {
  const { id } = useParams<{ id: string }>();
  const { starship, loading } = useStarshipCard(id);

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96">
        <ScaleLoader color="#FFE81F" height={40} width={4} />
      </div>
    );
  }

  if (!starship) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96 text-yellow-400 text-xl">
        Starship not found.
      </div>
    );
  }
  return (
    <main className="container fluid relative h-[80vh] mtop">
        <div className={styles.backgroundImage}></div>
        <div className={styles.starshipDetail}>
            <h2 className="detailsTitle">STARSHIP</h2>
            
            <div className={styles.starshipContent}>
        
                <div className={styles.shipDetails}>
                    <h1>{starship.name}</h1>
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
             <StarshipDetails  />
        </div>
       
    </main>
  )
}
export default StarshipCard