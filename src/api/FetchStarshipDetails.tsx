interface StarshipDetails {
  name: string;
  pilots: string[];
  films: string[];

}

export const fetchStarshipDetails = async (id: string | undefined) => {
  if (!id) return null;

  try {
    const res = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
    const data: StarshipDetails = await res.json();

    // Obtener datos de pilotos y películas
    const pilots = await Promise.all(
      data.pilots.map((url) => fetch(url).then((res) => res.json()))
    );

    const films = await Promise.all(
      data.films.map((url) => fetch(url).then((res) => res.json()))
    );

    return { ...data, pilots, films };
  } catch (error) {
    console.error("Error fetching starship details:", error);
    throw error;
  }
};
