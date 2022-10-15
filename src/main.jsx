import React from "react";
import ReactDOM from "react-dom/client";
import GithubCorner from "react-github-corner";
import { Footer } from "./components/Footer";
import { Game } from "./components/Game";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
    <GithubCorner href="https://github.com/Nick-Gabe/rabbit-hole-challenge"/>
    <Footer/>
  </React.StrictMode>
);
