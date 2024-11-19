import React from "react";
import powerful_img from "../assets/img/img_powerful_section.svg";
import "../assets/css/powerful.css"

const Powerful = () => {
  return (
    <div className="powerful">
      <div className="textContainer">
        <div className="headSection">
          <span className="title">Powerful.</span>
          <span className="desc">Play or create.</span>
        </div>
        <span className="desc">
          AxOS handles all your needs, whether you want to play or create. With the Linux Zen kernel,
          you get the best performance for your games and applications. Or you can chose stability with 
          the classic Linux kernel, the choice is yours. With AxOS, you can play any game, create any
          application and enjoy the power of your computer.
        </span>
      </div>
      <div className="imgContainer">
        <img src={powerful_img} alt="powerful"></img>
      </div>
    </div>
  );
};

export default Powerful;
