import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { IoMdHome } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

import { MdMovie } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          Michael's Movie App <MdMovie />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home <IoMdHome />
        </Link>
        <Link to="/upcoming" className="nav-link">
          Upcoming <MdOutlineWatchLater />
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites <MdFavoriteBorder />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
