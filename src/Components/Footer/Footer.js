import React from "react";
import "./Footer.css";

const organizations = [
    "Organizer1.svg",
    "Organizer2.svg",
    "Organizer3.svg",
    "Organizer4.svg",
    "Organizer5.svg",
    "Organizer6.svg",
    "Organizer7.svg",
    "Organizer8.svg",
    "Organizer9.svg",
    "Organizer10.svg",
    "Organizer11.svg",
    "Organizer12.svg",
  ];

const Footer = () => {

  return (
    <>
      <div className="organizer">
        <p className="title">Organizers</p>
        <div className="organization">
          {organizations.map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt=""
                className="organizationIcon"
              ></img>
            );
          })}
        </div>
      </div>
      <div className="row">
        <img
          src="JeddahSkyline.svg"
          alt="JeddahSkyline"
          className="JeddahSkyline"
        ></img>
      </div>
    </>
  );
};

export default Footer;
