import { useState, useEffect } from "react";
import { getUpcomingMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpcomingMovies = async () => {
      try {
        const upcomingMovies = await getUpcomingMovies();
        setMovies(upcomingMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load Movies..");
      } finally {
        setLoading(false);
      }
    };
    loadUpcomingMovies();
  }, []);

  return (
    <div className="home">
      <h2>Upcoming Movies</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.length === 0 && <p>No upcoming Movies</p>}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
