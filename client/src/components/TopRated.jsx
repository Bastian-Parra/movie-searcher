import "../assets/styles/populars.css"
import useTopRatedMovies from "../hooks/useTopRatedMovies.js"
import { CarouselComponent } from "./Carousel.jsx"
function TopRated() {

    const {movies, error, loading} = useTopRatedMovies()

    if(error) <p>{error}</p>
    if(!movies) <p>{"No hay movies"}</p>
    if(loading) <p>{"Cargando..."}</p>


    return (
        <section className="popular-container">
            <h1>Top Rated Movies</h1>
            <CarouselComponent movies={movies}/>
        </section>
    )
}

export default TopRated