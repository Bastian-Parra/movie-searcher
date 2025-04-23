import { useState } from "react";
import { getTopRatedMovies } from "../api/tmdb";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const {results} = await getTopRatedMovies();
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

export default useTopRatedMovies;
