import "../assets/styles/genre-container.css"
import {useGenres} from "../hooks/useGenres.js"

function GenreContainer() {

    const {genres, loading, error} = useGenres()

    if(loading) return <p>Cargando...</p>
    if(error) return <p>{error}</p>
    if(!genres) return <p>No hay generos</p>

    return (
      <div className="global-genre-container">
        <h3>Search by Genre</h3>
        <div className="genre-container">
          {genres.map((g) => (
            <li key={g.id}>
              <a href="#">{g.name}</a>
            </li>
          ))}
        </div>
      </div>
    );
}

export default GenreContainer