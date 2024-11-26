import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({ movie }) {
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  const posterURL =
    movie.id === "hire-me-01"
      ? movie.poster_path
      : imgBaseURL + movie.poster_path;

  const { isFavorite, removeFavorite, addFavorite } = useMovieContext();

  const isFavoriteStatus = isFavorite(movie.id);

  function handleFavorite(event) {
    event.preventDefault();
    isFavoriteStatus ? removeFavorite(movie.id) : addFavorite(movie);
  }

  const truncateText = (text, limit) =>
    text.length > limit
      ? text.substring(0, text.lastIndexOf(" ", limit)) + "..."
      : text;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterURL} alt={movie.title} srcSet="" />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFavoriteStatus ? "active" : ""}`}
            onClick={handleFavorite}
            aria-label={
              isFavoriteStatus ? "Remove from favorites" : "Add to favorites"
            }
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>
          {movie.title} (
          {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"})
        </h3>
        <p>{truncateText(movie.overview, 150)}</p>{" "}
        <p>
          Rating:{" "}
          {movie.vote_average === 0 ? "Unrated" : movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
