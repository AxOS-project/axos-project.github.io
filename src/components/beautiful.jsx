import React from "react";
import "../assets/css/beautiful.css";
import beautiful_img from '../assets/img/desktops.png'

const Beautiful = () => {
  return (
    <div className="beautiful">
      <div className="textContainer">
        <div className="headSection">
          <span className="title">Desktops.</span>
          <span className="desc">Three possibilities, one system.</span>
        </div>
        <span className="desc">
          AxOS is available with three different desktops, each with its own unique design and features.
          The plasma desktop is for those who want a stable, modern and customizable desktop. The Calla 
          desktop is for those who want a minimal, elegant and fast desktop. The Hyprland desktop is for
          those who want a futuristic, beautiful and powerful desktop. Choose the desktop that suits you
          best and enjoy the beauty and power of AxOS.
        </span>
      </div>
      <div className="imgContainer">
        <img
          className="imgContainer"
          src={beautiful_img}
          alt="beautiful"
        ></img>
      </div>
    </div>
  );
};

export default Beautiful;
