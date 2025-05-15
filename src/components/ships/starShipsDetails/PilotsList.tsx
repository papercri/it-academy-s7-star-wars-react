import "./List.scss"
import { ImageCard } from "./imgCard/ImageCard";
import {pilotImages, fallbackPilotsImages} from "../../../utils/images";

const getPilotImage = (name: string): string => {
  return pilotImages[name] || fallbackPilotsImages[Math.floor(Math.random() * fallbackPilotsImages.length)];
};

interface Pilot {
  name: string;
}

export const PilotsList = ({ pilots }: { pilots: Pilot[] }) => (
  <section className="mt-6">
    <h2 className="detailsTitle">PILOTS</h2>
    <div className="listContainer">
      {pilots.map((pilot) => (
        <ImageCard
          key={pilot.name}
          src={getPilotImage(pilot.name)}
          alt={pilot.name}
          title={pilot.name}
        />
      ))}
    </div>
  </section>
);
