import React from "react";
import "./TopPlayer.css";

const items = [
  { name: "Player Name", stats: "150 Points", wins: "l5 Wins" },
  { name: "Player Name", stats: "150 Points", wins: "l5 Wins" },
  { name: "Player Name", stats: "150 Points", wins: "l5 Wins" },
];

const TopPlayer = () => {
  return (
    <div className="player-container">
      <button className="button">See All Players </button>
      <div className="live-container">
        <h1>Top Players</h1>
        <div className="player-card-container">
          {items.map((item) => {
            return (
              <div key={item.name} class="player-card">
                <img
                  src="TopPlayer.png"
                  alt="Player"
                  className="TopPlayer"
                ></img>
                <div class="player-info">
                  <p className="name">{item.name}</p>
                  <div class="stats">
                    <p className="stats-text">{item.stats}</p>
                    <p className="stats-text">{item.wins}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPlayer;
