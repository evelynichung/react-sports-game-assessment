import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Team from "./components/team/Team";
import Game from "./components/game/Game";
import Scoreboard from "./components/scoreboard/Scoreboard";

import hamsterTeam from "./assets/images/hamsterTeam";
import pandaTeam from "./assets/images/pandaTeam";
import pokeEvee from "./assets/images/pokeEvee";
import pokeTogepi from "./assets/images/pokeTogepi";

import baseballHitBall from "./assets/audio/baseballHitBall";
import baseballHitCheer from "./assets/audio/baseballHitCheer";

function App(props) {
  const pandas = {
    name: "Pandas",
    logoSrc: "./src/assets/images/pandaTeam.png",
  };

  const hamsters = {
    name: "Hamsters",
    logoSrc: "./src/assets/images/hamsterTeam.jpg",
  };

  const evee = {
    name: "Evee",
    logoSrc: "./src/assets/images/pokeEvee.jpg",
  };

  const togepi = {
    name: "Togepi",
    logoSrc: "./src/assets/images/pokeTogepi.jpg",
  };

  return (
    <div className="App">
      <Game venue="Mystic Magic" homeTeam={pandas} visitingTeam={hamsters} />

      <Game venue="Serene Oasis" homeTeam={evee} visitingTeam={togepi} />
    </div>
  );
}

export default App;

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
