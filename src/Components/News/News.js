import React from "react";
import "./News.css";

const items = [
  { text: "Video Title May Be Written Here.", date: "12-5-2024" },
  { text: "Video Title May Be Written Here.", date: "12-5-2024" },
];

const News = () => {
  return (
    <div className="news-container">
      <button className="button">See More </button>
      <div className="live-container">
        <h1>Popular News</h1>
        <div className="video-container">
          <div class="news-card">
            <img src="News.png" alt="News" className="news-img"></img>
            <div class="content">
              <h2>Headline May Be Written Here.</h2>
              <p className="details">
                Details Here Details Here Details Here Details Here Details Here
                Details Here Details Here.
              </p>
            </div>
            <div class="footer">
              <div class="date">12-5-2024</div>
              <a href="/" class="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="col">
            {items.map((item) => {
              return (
                <div key={item.text} class="video-thumbnail">
                  <div class="image-container">
                    <img
                      src="SideVideo.png"
                      alt="Video Thumbnail"
                      className="thumbnail-img"
                    ></img>
                    <div class="play-button">❯</div>
                  </div>
                  <div class="video-details">
                    <h4>{item.text}</h4>
                    <p>{item.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
