import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermLower = searchTerm.toLowerCase();

  // Add custom movie to the list advertising myself
  const customMovie = {
    id: "hire-me-01",
    title: "Michael Mwai: Mission Employable",
    overview:
      "An epic journey of a passionate developer and fitness coach seeking to revolutionize the tech industry!",
    release_date: "2024-11-25",
    poster_path: "public/mission-employable-movie-poster.jpg",
    vote_average: 10.0,
  };

  const [movies, setMovies] = useState([customMovie]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies([customMovie, ...popularMovies]);
      } catch (error) {
        console.log(error);
        setError("Failed to load Movies..");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchedMovies = await searchMovies(searchTerm);
      setMovies(searchedMovies);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search Movies..");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().includes(searchTermLower) && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
