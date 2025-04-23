import { useState } from "react";
import { useEffect } from "react";
import { getNowPlayingMovies } from "../api/tmdb";

export const useNowPlayingMovies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const {results} = await getNowPlayingMovies();
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

export default useNowPlayingMovies;
