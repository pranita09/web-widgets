import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="description">
        <p className="tagline1">
          Simplify, Beautify, and Customize <span>with</span>
        </p>
        <p className="tagline2">WebWidgets</p>
        <p className="info">
          A modern, sleek and accessible library of css components, enabling you
          to build your own design system and develop your websites faster.
        </p>
        <button className="get-started-btn" onClick={() => navigate("/docs")}>
          Get Started
        </button>
      </div>
    </div>
  );
};
