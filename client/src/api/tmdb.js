import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_KEY,
  },
});

export const getMovieListGenres = async () => {
  const { data } = await tmdb.get("/genre/movie/list")
  return data
}

export const searchMovies = async (query, page = 1) => {
  const { data } = await tmdb.get("/search/movie", {
    params: { query, page },
  });
  return data;
};

export const getPopularMovies = async () => {
  const { data } = await tmdb.get("/movie/popular");
  return data
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdb.get("/movie/top_rated")
  return data
}

export const getNowPlayingMovies = async () => {
  const { data } = await tmdb.get("/movie/now_playing")
  return data
}

export const getUpcomingMovies = async () => {
  const { data } = await tmdb.get("/movie/upcoming")
  return data
}

export const getMovieDetails = async (id) => {
  const { data } = await tmdb.get(`/movie/${id}`);
  return data;
};

export const getSimilarMovies = async (id) => {
  const { data } = await tmdb.get(`/movie/${id}/similar`);
  return data
}