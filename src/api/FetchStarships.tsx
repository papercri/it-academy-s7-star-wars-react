export const fetchStarships = async () => {
    const res = await fetch("https://swapi.py4e.com/api/starships/");
    if (!res.ok) throw new Error("Failed to fetch Starships");
    const data = await res.json();
    return data.results;
};