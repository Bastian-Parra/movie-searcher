import "../assets/styles/populars.css"
import usePopularMovies from "../hooks/usePopularMovies.js"
import { CarouselComponent } from "./Carousel.jsx"
function Populars() {

    const {movies, error, loading} = usePopularMovies()

    if(error) <p>{error}</p>
    if(!movies) <p>{"No hay movies"}</p>
    if(loading) <p>{"Cargando..."}</p>

    return (
        <section className="popular-container">
            <h1>Popular Movies</h1>
            <CarouselComponent movies={movies}/>
        </section>
    )
}

export default Populars