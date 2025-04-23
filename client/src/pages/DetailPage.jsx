import { useParams } from "react-router-dom";
import { useDetailMovie } from "../hooks/useDetailMovie";
import { useSimilarMovies } from "../hooks/useSimilarMovies";
import { CarouselComponent } from "../components/Carousel";
import { ArrowDown } from "../components/icons/ArrowDown";

import "../assets/styles/detail.css"
import { div } from "framer-motion/client";
function DetailPage() {

  const { id } = useParams()

  const { movie, loading, error } = useDetailMovie({ id });

  const { movies } = useSimilarMovies({ id })

  if(loading) return <p>Cargando...</p>
  if(error) return <p>{error}</p>
  if(!movie) return <p>No hay pelicula</p>


  console.log(movie)

  return (
    <section>
      <div
        className="detail-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
          backgroundPositionY: "-500px",
        }}
      >
        <div>
          <h1>{movie.title}</h1>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id} className="genre">
                {genre.name}
              </li>
            ))}
          </ul>
          <p>{movie.overview}</p>
        </div>
      </div>

      <div>
        <h2 id="similar-movies-title">Similar Movies <ArrowDown/></h2>
          <CarouselComponent movies={movies}/>        
      </div>
    </section>
  );
}

export default DetailPage