import React from "react";

import Team from "./components/team/Team";
import Game from "./components/game/Game";

import hamsterTeam from "./assets/images/hamsterTeam";
import pandaTeam from "./assets/images/pandaTeam";
import pokeEvee from "./assets/images/pokeEvee";
import pokeTogepi from "./assets/images/pokeTogepi";

import baseballHitBall from "./assets/audio/baseballHitBall";
import baseballHitCheer from "./assets/audio/baseballHitCheer";

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <h2>☆~ Scoreboard ~☆</h2>

      <div className="teamStats">
        <h3>Visitors: {props.visitingTeamStats.score}</h3>
      </div>

      <div className="teamStats">
        <h3>Home: {props.homeTeamStats.score}</h3>
      </div>
    </div>
  );
}

export default Scoreboard;
