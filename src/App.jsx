import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import Upcoming from "./pages/Upcoming";
import Navbar from "./components/Navbar";
import "./css/App.css";

function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
