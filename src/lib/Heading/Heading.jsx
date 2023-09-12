import "./Heading.css";
import { Sidebar } from "../../documentation";

export const HeadingDoc = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <h1>Heading Doc</h1>
      </div>
    </div>
  );
};
