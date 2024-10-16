import "./App.css";
import About from "./Components/About/About";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Matches from "./Components/Matches/Matches";
import News from "./Components/News/News";
import TopPlayer from "./Components/TopPlayer/TopPlayer";

function App() {
  return (
    <div className="App">
      <div className="headerOverlay">
        <img src="MainHeader.png" alt="Overlay" className="overlay"></img>
        <img src="MainHeaderFabric.png" alt="Fabric" className="fabric"></img>
        <img
          src="BilliardsHeader.png"
          alt="Billiards"
          className="BilliardsHeader"
        ></img>
        <div className="BallsPattern-Container">
          <img
            src="BallsPattern.svg"
            alt="Balls Pattern"
            className="BallsPattern"
          ></img>
        </div>

        <div className="Header-Description">
          <p className="Text-One">Experience The Best</p>
          <p className="Text-Two"> Pool Game Ever.</p>
          <p className="Text-Three"> Taking Place in Jeddah, Saudi Arabia</p>
          <p className="Text-Four">3 - 8 June 2024</p>
        </div>
      </div>
      <div className="Triangle">
        <div className="Triangle-content">
          <p className="Triangle-title">A Game of Skill And Speed</p>
          <p className="Triangle-text">
            Get Your Chance to Watch these talented players.
          </p>
        </div>
        <div className="BilliardsOne-Container">
          <img
            src="BilliardsOne.svg"
            alt="Billiards"
            className="BilliardsOne"
          ></img>
          <img
            src="Triangle.svg"
            alt="Triangle"
            className="Triangle-Group"
          ></img>
        </div>
      </div>
      <div className="Flag">
        <div className="SaudiFlag-Container">
          <img src="SaudiFlag.png" alt="Saudi Flag" className="SaudiFlag"></img>
        </div>
        <img
          src="BallsPatternTwo.svg"
          alt="Balls Pattern"
          className="Balls-PatternTwo"
        ></img>
        <img src="WC2024.svg" alt="WC2024" className="WC"></img>
        <img src="Sparks.svg" alt="Sparks" className="Sparks"></img>
        <img src="SphereLayout.png" alt="Sphere" className="Sphere"></img>
        <div className="Matches-Container">
          <Matches />
        </div>
        <div className="Top-Player">
          <TopPlayer />
        </div>
        <div className="News">
          <News />
        </div>
        <Carousel />
      </div>
      <div>
        <div className="main-header">
          <Header />
        </div>
      </div>
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
