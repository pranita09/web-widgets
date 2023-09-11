import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./documentation";
import { Docs, Home } from "./pages";
import {
  AlertDoc,
  AvatarDoc,
  BadgeDoc,
  ButtonDoc,
  CardDoc,
  HeadingDoc,
  ImageDoc,
  TextDoc,
} from "./lib";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/alert" element={<AlertDoc />} />
        <Route path="/docs/avatar" element={<AvatarDoc />} />
        <Route path="/docs/badge" element={<BadgeDoc />} />
        <Route path="/docs/button" element={<ButtonDoc />} />
        <Route path="/docs/card" element={<CardDoc />} />
        <Route path="/docs/heading" element={<HeadingDoc />} />
        <Route path="/docs/image" element={<ImageDoc />} />
        <Route path="/docs/text" element={<TextDoc />} />
      </Routes>
    </div>
  );
}

export default App;
