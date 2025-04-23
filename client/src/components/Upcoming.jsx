import "../assets/styles/populars.css"
import useUpcomingMovies from "../hooks/useUpcomingMovies.js"
import { CarouselComponent } from "./Carousel.jsx"
function Upcoming() {

    const {movies, error, loading} = useUpcomingMovies()

    if(error) <p>{error}</p>
    if(!movies) <p>{"No hay movies"}</p>
    if(loading) <p>{"Cargando..."}</p>

    return (
        <section className="popular-container">
            <h1>Upcoming Movies</h1>
            <CarouselComponent movies={movies}/>
        </section>
    )
}

export default Upcoming