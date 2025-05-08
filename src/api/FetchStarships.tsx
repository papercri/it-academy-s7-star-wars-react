export const fetchStarships = async (page: number = 1) => {
    const res = await fetch(`https://swapi.py4e.com/api/starships/?page=${page}`);
    const data = await res.json();
    return {
        next: data.next,
        results: data.results,
      };
};