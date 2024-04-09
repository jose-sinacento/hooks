import { useEffect, useState } from "react";

export const useFetchCharacter = (url) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        // Hemos dejado de cargar los datos
        setLoading(false);

        // Rellenamos el objeto con los datos devueltos por la API
        setCharacter(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, [url]);

  return { character, loading };
};