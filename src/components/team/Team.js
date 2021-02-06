import React from "react";

import Game from "./components/game/Game";
import Scoreboard from "./components/scoreboard/Scoreboard";

import hamsterTeam from "./assets/images/hamsterTeam";
import pandaTeam from "./assets/images/pandaTeam";
import pokeEvee from "./assets/images/pokeEvee";
import pokeTogepi from "./assets/images/pokeTogepi";

import baseballHitBall from "./assets/audio/baseballHitBall";
import baseballHitCheer from "./assets/audio/baseballHitCheer";

function Team(props) {
  return <div className="Team">
  let shotPercentageDiv;
  let shotPercentage;

  if (props.stats.shots) {
    shotPercentage = (props.stats.score / props.stats.shots) * 100;
    shotPercentage = Math.round(shotPercentage);
    shotPercentageDiv = (
      <div>
        <strong>Shot Percentage: {shotPercentage}</strong>
      </div>
    );
  }

  return (
    <div className="Team">
      <h2>{props.name}</h2>
      <div className="identity">
        <img src={props.logo} alt={props.name} />
      </div>
      <div>
        <strong>Shots: </strong> {props.stats.shots}
      </div>
      <div>
        <strong>Score: </strong> {props.stats.score}
      </div>
      <div>
        <strong>Shot Percentage: {shotPercentage}</strong>
      </div>
      <h3>
        <button onClick={props.shotHandler}>Shoot</button>
      </h3>
    </div>
  </div>;
}

export default Team;
