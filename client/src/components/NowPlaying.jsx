import "../assets/styles/populars.css";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import { CarouselComponent } from "./Carousel.jsx";
function NowPlaying() {
  const { movies, error, loading } = useNowPlayingMovies();

  if (error) <p>{error}</p>;
  if (!movies) <p>{"No hay movies"}</p>;
  if (loading) <p>{"Cargando..."}</p>;

  return (
    <section className="popular-container">
      <h1>Now Playing Movies</h1>
      <CarouselComponent movies={movies} />
    </section>
  );
}

export default NowPlaying;
