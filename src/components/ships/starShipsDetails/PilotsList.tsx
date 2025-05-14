/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./StarshipDetails.module.scss";
const pilotImages: Record<string, string> = {

  "Biggs Darklighter": "/images/pilots/Biggs-Darklighter.jpg",
  "Obi-Wan Kenobi": "/images/pilots/Obi-Wan-Kenobi.jpg",
  "Luke Skywalker": "/images/pilots/luke-skywalker.jpg",
  "C-3PO": "/images/pilots/C-3PO.jpg",
  "R2-D2": "/images/pilots/R2-D2.jpg",
  "Darth Vader": "/images/pilots/darth-vader.jpg",
  "Leia Organa": "/images/pilots/leia-organa.jpg",
  "Owen Lars": "/images/pilots/owen-lars.jpg",
  "Beru Whitesun lars": "/images/pilots/beru-whitesun-lars.jpg",
  "R5-D4": "/images/pilots/R5-D4.jpg",

};
const fallbackImages = [
  "/images/pilots/darth-vader.jpg",
  "/images/pilots/beru-whitesun-lars.jpg",
  "/images/pilots/luke-skywalker.jpg",
  "/images/pilots/leia-organa.jpg",
  "/images/pilots/Biggs-Darklighter.jpg",
  "/images/pilots/owen-lars.jpg",
  "/images/pilots/R5-D4.jpg",
  "/images/pilots/C-3PO.jpg",
   "/images/pilots/R5-D4.jpg"
];

const getPilotImage = (name: string): string => {
  return pilotImages[name] || fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
};

export const PilotsList = ({ pilots }: { pilots: any[] }) => (
  <section className="mt-6">
   <h2 className="detailsTitle">PILOTS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 content-center mt-6">
      {pilots.map((pilot) => (
        <div key={pilot.name} className="bg-black rounded-md overflow-hidden mx-auto shadow text-center">
          <img
            src={getPilotImage(pilot.name)}
            alt={pilot.name}
            className="max-w-full h-48 object-scale-down w-[200px] mb-2"/>

          <div className="p-2 text-white text-sm tracking-wider whitespace-nowrap">{pilot.name}</div>
        </div>
      ))}
    </div>
  </section>
);
