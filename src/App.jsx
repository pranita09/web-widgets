import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./documentation";
import { Docs, Home } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </div>
  );
}

export default App;
