import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);

    if (selectedLanguage === "AR") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="Logo.svg" alt="Billiards Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="/"
              className={activeTab === "Home" ? "active" : ""}
              onClick={() => handleTabClick("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="# About"
              className={activeTab === "About" ? "active" : ""}
              onClick={() => handleTabClick("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Jeddah"
              className={activeTab === "Life In Jeddah" ? "active" : ""}
              onClick={() => handleTabClick("Life In Jeddah")}
            >
              Life In Jeddah
            </a>
          </li>
          <li>
            <a
              href="#MediaCenter"
              className={activeTab === "Media Center" ? "active" : ""}
              onClick={() => handleTabClick("Media Center")}
            >
              Media Center
            </a>
          </li>
          <li>
            <a
              href="#Matches"
              className={activeTab === "Matches" ? "active" : ""}
              onClick={() => handleTabClick("Matches")}
            >
              Matches
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className={activeTab === "Contact Us" ? "active" : ""}
              onClick={() => handleTabClick("Contact Us")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <select
        className="lang-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="EN">EN</option>
        <option value="AR">AR</option>
      </select>
    </header>
  );
};

export default Header;
