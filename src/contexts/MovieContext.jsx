import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === movie.id)) {
        return prevFavorites; // Already exists, do nothing
      }
      return [...prevFavorites, movie];
    });
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
