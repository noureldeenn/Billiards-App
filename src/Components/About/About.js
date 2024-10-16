import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main">
      <section class="about">
        <div class="about-text">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <button className="button">Read More</button>
        </div>
        <div className="CircleContainer">
          <div class="circle"></div>
        </div>
      </section>
      <div className="GroupTwo-Container">
        <img src="GroupOne.png" alt="GroupTwo" className="GroupTwo"></img>
      </div>
      <div class="about-image">
        <img src="BilliardsTable.png" alt="Pool Table"></img>
      </div>
    </div>
  );
};

export default About;
