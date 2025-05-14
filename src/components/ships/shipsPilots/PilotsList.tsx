const pilotImages: Record<string, string> = {
  "Han Solo": "/images/pilots/han-solo.jpg",
  "Lando Calrissian": "/images/pilots/lando.jpg",
  "Nien Nunb": "/images/pilots/nien.jpg",
  "Chewbacca": "/images/pilots/chewbacca.jpg",

};

export const PilotsList = ({ pilots }: { pilots: any[] }) => (
  <div>
    <h2 className="text-xl font-bold tracking-wide mb-2">Pilots</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {pilots.map((pilot) => (
        <div key={pilot.name} className="bg-black rounded-md overflow-hidden text-center shadow">
          <img src={pilotImages[pilot.name]} alt={pilot.name} className="w-full h-48 object-cover" />
          <div className="p-2 text-white text-sm tracking-wider whitespace-nowrap">{pilot.name}</div>
        </div>
      ))}
    </div>
  </div>
);
