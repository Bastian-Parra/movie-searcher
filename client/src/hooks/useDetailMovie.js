import { useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import { useEffect } from "react";

export const useDetailMovie = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
};
