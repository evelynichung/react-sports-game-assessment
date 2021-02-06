import React from "react";
import { Route, Switch } from "react-router-dom";

import Team from "./components/team/Team";
import Scoreboard from "./components/scoreboard/Scoreboard";

import hamsterTeam from "./assets/images/hamsterTeam";
import pandaTeam from "./assets/images/pandaTeam";
import pokeEvee from "./assets/images/pokeEvee";
import pokeTogepi from "./assets/images/pokeTogepi";

import baseballHitBall from "./assets/audio/baseballHitBall";
import baseballHitCheer from "./assets/audio/baseballHitCheer";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };

    this.shotSound = new Audio("../src/assets/audio/baseballHitBall.mp3");
    this.scoreSound = new Audio("../src/assets/audio/baseballHitCheer.mp3");
  }

  shotHandler = (team) => {
    const teamStatsKey = `${team}TeamStats`;

    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 120);
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    return (
      <div className="Game">
        <h1>Welcome to {this.props.venue}</h1>

        <Scoreboard
          visitingTeamStats={this.state.visitingTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />

        <div className="Stats">
          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shotHandler={() => this.shotHandler("visiting")}
          />
          <div className="versus">
            <h1>versus</h1>
            <div>
              <h3>
                <strong>Resets:</strong> {this.state.resetCount}
                <button onClick={this.resetGame}>Reset Game</button>
              </h3>
            </div>
          </div>
          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shotHandler("home")}
          />
        </div>
      </div>
    );
  }
}

export default Game;
