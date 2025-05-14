/* eslint-disable @typescript-eslint/no-explicit-any */
const filmImages: Record<string, string> = {
  "A New Hope": "/images/films/a-new-hope.jpg",
  "The Empire Strikes Back": "/images/films/empire-strikes-back.jpg",
  "Return of the Jedi": "/images/films/return-of-the-jedi.jpg",
  "The Phantom Menace": "/images/films/The-Phantom-Menace.jpg",
  "Attack of the Clones": "/images/films/Attack-of-the-Clones.jpg",
  "Revenge of the Sith": "/images/films/Revenge-of-the-Sith.jpg",
};

export const FilmsList = ({ films }: { films: any[] }) => (
  <div>
    <h2 className="text-xl font-bold tracking-wide mt-6 mb-2">Films</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {films.map((film) => (
        <div key={film.title} className="bg-black rounded-md overflow-hidden text-center shadow">
          <img src={filmImages[film.title]} alt={film.title} className="w-full h-60 object-cover" />
          <div className="p-2 text-white text-sm tracking-wider whitespace-nowrap">
            <div className="uppercase">{film.title}</div>
            <div>Episode {film.episode_id}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
