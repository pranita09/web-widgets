import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "../../utils/icons";

export const Header = () => {
  const activeStyles = ({ isActive }) => ({
    color: isActive ? "#8553fa" : "inherit",
    fontWeight: isActive ? "500" : "",
  });
  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/">
          <p className="logo-name">WebWidgets</p>
        </Link>
      </div>
      <div className="nav-middle">
        <div className="searchbar">
          <input type="text" placeholder="Search for component..." />
          <button>Search</button>
        </div>
      </div>
      <div className="nav-right">
        <NavLink to="/" style={activeStyles}>
          <p>Home</p>
        </NavLink>
        <NavLink to="/docs" style={activeStyles}>
          <p>Docs</p>
        </NavLink>
        <div className="github-icon">
          <Link to="https://github.com/pranita09/web-widgets" target="_blank">
            <FaGithub title="GitHub" />
          </Link>
        </div>
      </div>
    </div>
  );
};
