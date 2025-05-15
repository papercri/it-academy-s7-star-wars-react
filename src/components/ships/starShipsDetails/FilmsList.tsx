import "./List.scss"
import { ImageCard } from "./imgCard/ImageCard";
import { filmImages, fallbackFilmImages } from "../../../utils/images";

const getFilmImage = (name: string): string => {
  return filmImages[name] || fallbackFilmImages[Math.floor(Math.random() * fallbackFilmImages.length)];
};

interface Film {
  title: string;
  episode_id: number;
}

export const FilmsList = ({ films }: { films: Film[] }) => (
  <section className="mt-10">
    <h2 className="detailsTitle">FILMS</h2>
      <div className="listContainer">
      {films.map((film) => (
        <ImageCard
          key={film.title}
          src={getFilmImage(film.title)}
          alt={film.title}
          title={film.title}
          subtitle={`Episode ${film.episode_id}`}
        />
      ))}
    </div>
  </section>
);
