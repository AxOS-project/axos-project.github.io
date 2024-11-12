import React from "react";
import "../assets/css/dlcards.css";
import dlico from "../assets/img/download_icon.svg";
import desktops from "../assets/img/desktops.png";

const DlCards = () => {
  function plasmaclick(e) {
    e.preventDefault();
    window.location.href =
      "https://github.com/AxOS-project/AxOS/releases/latest";
  }
  return (
    <section className="cardContainer">
      <div className="card">
        <header className="cardHeader">
          <span className="card_title">Download the ISO</span>
          <span className="border"></span>
        </header>
        <section className="cardBody">
          <div className="img">
            <img src={desktops} alt="desktops"></img>
          </div>
        </section>
        <footer className="cardfooter">
          <button onClick={plasmaclick}>
            <img src={dlico} alt="dl"></img>
            <span className="btn">Donwload</span>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default DlCards;
