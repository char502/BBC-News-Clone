import React from "react";
// import logo from './logo.svg';

import BBCLogo from "./Images/BBCLogo.png";
import bellImage from "./Images/bellImage.png";
import userIcon from "./Images/userIcon.png";
// import magnifyingGlass from "./Images/magnifyingGlass.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {/* Page navigation menu */}
          <div className="pagesMenuDiv">
            <div className="inner">
              <ul className="pagesMenu">
                <li className="pages">
                  <img className="BBClogo" src={BBCLogo} alt="BBC-Logo" />
                </li>
                <form action="Submit">
                  <li className="pages sign-in">
                    <img className="userIcon" src={userIcon} alt="test" />
                    Sign in
                  </li>
                </form>
                <li className="bell-Image">
                  <img className="bell-Image" src={bellImage} alt="bell" />
                </li>
                <li className="pages">News</li>
                <li className="pages">Sport</li>
                <li className="pages">Weather</li>
                <li className="pages">iPlayer</li>
                <li className="pages">Sounds</li>
                <li className="pages">CBBC</li>
                <li className="pages">More</li>
                <form className="searchForm" action="submit">
                  <input
                    className="searchBox"
                    type="text"
                    placeholder="Search"
                  />
                  {/* <button type="submit">
                    <img
                      className="magnifyingGlass"
                      src={magnifyingGlass}
                      alt="Magniying Glass"
                    />
                  </button> */}
                </form>
              </ul>
            </div>
          </div>
          {/* news items menu */}
          <div className="newsMenuDiv">
            <div className="inner">
              <div className="newsHeader">NEWS</div>
              <ul className="newsMenu">
                <li className="news">
                  <span>Home</span>
                </li>
                <li className="news">UK</li>
                <li className="news">World</li>
                <li className="news">Business</li>
                <li className="news">Politics</li>
                <li className="news">Tech</li>
                <li className="news">Science</li>
                <li className="news">Health</li>
                <li className="news">Family & Education</li>
                <li className="news">Entertainment & Arts</li>
                <li className="news">Stories</li>
                <li className="news">More</li>
              </ul>
            </div>
          </div>
          {/* Local news Mnu */}
          <div>
            <div className="inner">
              <ul className="localNewsMenuDiv">
                <li className="localNews">England</li>
                <li className="localNews">N.Ireland</li>
                <li className="localNews">Scotland</li>
                <li className="localNews">Alba</li>
                <li className="localNews">Wales</li>
                <li className="localNews">Cymru</li>
                <li className="localNews">Local News</li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
