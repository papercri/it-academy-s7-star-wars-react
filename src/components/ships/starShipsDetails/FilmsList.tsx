
// import styles from "./StarshipDetails.module.scss";


const filmImages: Record<string, string> = {
  "A New Hope": "/images/films/a-new-hope.jpg",
  "The Empire Strikes Back": "/images/films/empire-strikes-back.jpg",
  "Return of the Jedi": "/images/films/return-of-the-jedi.jpg",
  "The Phantom Menace": "/images/films/The-Phantom-Menace.jpg",
  "Attack of the Clones": "/images/films/Attack-of-the-Clones.jpg",
  "Revenge of the Sith": "/images/films/Revenge-of-the-Sith.jpg",
};
const fallbackImages = [
   "/images/films/Revenge-of-the-Sith.jpg",
  "/images/films/Attack-of-the-Clones.jpg",
  "/images/films/The-Phantom-Menace.jpg"
];

const getFilmImage = (name: string): string => {
  return filmImages[name] || fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
};

interface Film {
  title: string;
  episode_id: number;
}

export const FilmsList = ({ films }: { films: Film[] }) => (
    <section className="mt-10">
    <h2 className="detailsTitle">Films</h2>
       <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 content-center mt-6">
      {films.map((film) => (
        <div key={film.title} className="bg-black rounded-md overflow-hidden mx-auto shadow text-center">
          <img 
          src={getFilmImage(film.title)} 
          alt={film.title} 
          className="max-w-full h-48 object-scale-down w-[200px] mb-2"/>
          <div className="p-2 text-white text-sm tracking-wider whitespace-nowrap">
            <div className="uppercase">{film.title}</div>
            <div>Episode {film.episode_id}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
