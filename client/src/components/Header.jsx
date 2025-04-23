import { useState, useRef, useEffect } from "react";
import useMovies from "../hooks/useMovies.js";

// Components
import TitleWithIcon from "./TitleWithIcon.jsx";
import AnchorWithIcon from "./AnchorWithIcon.jsx";

// Icons
import { MovieIcon } from "./icons/MovieIcon.jsx";
import { SearchIcon } from "./icons/SearchIcon.jsx";
import { PopularIcon } from "./icons/PopularIcon.jsx";
import { NowPlayingIcon } from "./icons/NowPlayingIcon.jsx";
import { TopRatedIcon } from "./icons/TopRatedIcon.jsx";
import { UpcomingIcon } from "./icons/UpcomingIcon.jsx";

// Styles
import "../assets/styles/header.css";

function Header() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Query para búsqueda real
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);
  const { movies, loading, error } = useMovies(searchQuery);

  // Debounce para evitar búsquedas instantáneas
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Búsqueda con delay (300ms después de dejar de escribir)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchQuery(query);
    }, 300);

    return () => clearTimeout(timerId);
  }, [query]);

  // Mantener el foco
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);


  return (
    <header>
      <TitleWithIcon text="Movie Searcher" icon={<MovieIcon />} ref="#" />

      <nav>
        <ul>
          <li>
            <div className="search-container">
              <div className="search-container-inside">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search for movies..."
                  id="search"
                  onFocus={() => setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                />
                <label htmlFor="search">
                  <SearchIcon />
                </label>
              </div>

              {showResults && (
                <ul className="search-results">
                  {loading && <li>Cargando...</li>}
                  {!loading && movies?.length === 0 && (
                    <li>No se encontraron resultados</li>
                  )}
                  {movies?.map((movie) => (
                    <li key={movie.id} className="movie-item">
                      <a href={`/detail/${movie.id}`}>{movie.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Navigation Links */}
            <AnchorWithIcon
              text="Populars"
              icon={<PopularIcon />}
              ref="/populars"
            />
            <AnchorWithIcon
              text="Now Playing"
              icon={<NowPlayingIcon />}
              ref="/nowplaying"
            />
            <AnchorWithIcon
              text="Top Rated"
              icon={<TopRatedIcon />}
              ref="/toprated"
            />
            <AnchorWithIcon
              text="Upcoming"
              icon={<UpcomingIcon />}
              ref="/upcoming"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;