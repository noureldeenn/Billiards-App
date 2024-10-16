import React from "react";
import "./Matches.css";

const liveItems = [
  { nameOne: "Player Name", nameTwo: "Player Name", time: "live" },
  { nameOne: "Player Name", nameTwo: "Player Name", time: "live" },
];

const upcomingItems = [1, 2];

const Matches = () => {
  return (
    <div className="container">
      <h1>Matches</h1>
      <div className="live-container">
        <h1>Live</h1>
        <div className="live-card">
          {liveItems.map((item) => {
            return (
              <div key={item.nameOne} class="match-container">
                <div class="player player-left">
                  <div class="player-circle"></div>
                  <p className="player-name">{item.nameOne}</p>
                </div>
                <div class="vs-container">
                  <div class="vs-box">VS</div>
                  <div class="live-box">Live</div>
                </div>
                <div class="player player-right">
                  <div class="player-circle"></div>
                  <p className="player-name">{item.nameTwo}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="upcoming-container">
        <h1>Upcoming</h1>
        <div className="live-card">
        {upcomingItems.map((item) => {
        return (
          <div key={item} class="match-upcoming-container">
            <div class="player player-left">
              <div class="player-circle"></div>
            </div>
            <div class="vs-container">
              <div class="vs-box">VS</div>
            </div>
            <div class="player player-right">
              <div class="player-circle"></div>
            </div>
          </div>
        );
      })}
        </div>
      </div>
    </div>
  );
};

export default Matches;
