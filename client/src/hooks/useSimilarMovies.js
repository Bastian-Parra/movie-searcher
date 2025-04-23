import { useState} from "react";
import { getSimilarMovies } from "../api/tmdb";
import { useEffect } from "react";

export const useSimilarMovies = ({id}) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const {results} = await getSimilarMovies(id);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useSimilarMovies;
