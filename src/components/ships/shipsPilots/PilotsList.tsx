/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const PilotsList = ({ pilots }: { pilots: any[] }) => (
  <div>
    <h2 className="text-xl font-bold tracking-wide mb-2">Pilots</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {pilots.map((pilot) => (
        <div key={pilot.name} className="bg-black rounded-md overflow-hidden text-center shadow">
          <img src={pilotImages[pilot.name]} alt={pilot.name} className="w-full h-48 object-scale-down" />
          <div className="p-2 text-white text-sm tracking-wider whitespace-nowrap">{pilot.name}</div>
        </div>
      ))}
    </div>
  </div>
);
