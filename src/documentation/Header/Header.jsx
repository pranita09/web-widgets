import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaGithub } from "../../utils/icons";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const activeStyles = ({ isActive }) => ({
    color: isActive ? "#8553fa" : "inherit",
    fontWeight: isActive ? "500" : "",
  });

  const components = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "heading",
    "image",
    "text",
  ];

  const handleSearchClick = () => {
    if (components.includes(searchInput.toLowerCase())) {
      navigate(`/docs/${searchInput.toLowerCase()}`);
    } else {
      alert("Oops, no such component found.");
    }
    setSearchInput("");
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/">
          <p className="logo-name">WebWidgets</p>
        </Link>
      </div>
      <div className="nav-middle">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for component..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearchClick}>Search</button>
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
