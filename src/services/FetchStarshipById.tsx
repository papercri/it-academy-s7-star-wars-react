export const fetchStarshipById = async (id: string | undefined) => {
    if (!id) return null;
  
    try {
      const res = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching starship:", error);
      throw error;
    }
  };