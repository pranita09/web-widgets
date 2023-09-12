import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const activeStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "#c4b5fb" : "none",
    fontWeight: isActive ? "500" : "",
  });
  return (
    <div className="sidebar">
      <ul className="components-list">
        <NavLink to="/docs/avatar" className="link" style={activeStyles}>
          <li>Avatar</li>
        </NavLink>
        <NavLink to="/docs/alert" className="link" style={activeStyles}>
          <li>Alert</li>
        </NavLink>
        <NavLink to="/docs/badge" className="link" style={activeStyles}>
          <li>Badge</li>
        </NavLink>
        <NavLink to="/docs/button" className="link" style={activeStyles}>
          <li>Button</li>
        </NavLink>
        <NavLink to="/docs/card" className="link" style={activeStyles}>
          <li>Card</li>
        </NavLink>
        <NavLink to="/docs/heading" className="link" style={activeStyles}>
          <li>Heading</li>
        </NavLink>
        <NavLink to="/docs/text" className="link" style={activeStyles}>
          <li>Text</li>
        </NavLink>
        <NavLink to="/docs/image" className="link" style={activeStyles}>
          <li>Image</li>
        </NavLink>
      </ul>
    </div>
  );
};
