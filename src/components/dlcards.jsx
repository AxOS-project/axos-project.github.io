import React from "react";
import "../assets/css/dlcards.css";
import dlico from "../assets/img/download_icon.svg";
import plasma from "../assets/img/axos-plasma.png";
import awm from "../assets/img/axawed-screen.png";

const DlCards = () => {
  function plasmaclick(e) {
    e.preventDefault();
    window.location.href =
      "https://mega.nz/folder/5slz0aKD#j7dbIEM1AWi8RnxG5FwYWg";
  }
  function awmclick(e) {
    e.preventDefault();
    window.location.href =
      "https://github.com/AxOS-project/AxOS-Awesome/releases";
  }
  return (
    <section className="cardContainer">
      <div className="card">
        <header className="cardHeader">
          <span className="card_title">Plasma Edition</span>
          <span className="border"></span>
        </header>
        <section className="cardBody">
          <div className="img">
            <img src={plasma} alt="plasma"></img>
          </div>
          <div className="infos">
            <ul>
              <li className="desc">More Stable</li>
              <li className="desc">More features</li>
              <li className="desc">More Customizable</li>
              <li className="desc">More User Friendly</li>
            </ul>
          </div>
        </section>
        <footer className="cardfooter">
          <button onClick={plasmaclick}>
            <img src={dlico} alt="dl"></img>
            <span className="btn">Donwload</span>
          </button>
        </footer>
      </div>
      <div className="card">
        <header className="cardHeader">
          <span className="card_title">Awesome Edition</span>
          <span className="border"></span>
        </header>
        <section className="cardBody">
          <div className="img">
            <img src={awm} alt="awm"></img>
          </div>
          <div className="infos">
            <ul>
              <li className="desc">Better design</li>
              <li className="desc">More performances</li>
              <li className="desc">More advanced</li>
            </ul>
            <span className="note desc">
              <p>Note: this edition is still in beta version.</p>
            </span>
          </div>
        </section>
        <footer className="cardfooter">
          <button onClick={awmclick}>
            <img src={dlico} alt="dl"></img>
            <span className="btn">Donwload</span>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default DlCards;
