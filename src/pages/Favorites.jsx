import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No favorite Movies</h2>
        <p>Browse and add some..</p>
      </div>
    );
  } else {
    return (
      <>
        <h2>Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Favorite;
