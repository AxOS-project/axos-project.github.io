import React from "react";
import "../assets/css/beautiful.css";
import beautiful_img from '../assets/img/axhypr-screen.png'

const Beautiful = () => {
  return (
    <div className="beautiful">
      <div className="textContainer">
        <div className="headSection">
          <span className="title">Beautiful.</span>
          <span className="desc">Your beautiful colleague by day.</span>
        </div>
        <span className="desc">
          When it comes to design, AxOS sets a new standard in the world of
          operating systems. The visual aesthetic of AxOS is a harmonious blend
          of modern elegance and functional simplicity. Every aspect of the
          design, from the color palette to the typography, is carefully crafted
          to enhance user experience. The interface is sleek and intuitive,
          ensuring that users can navigate effortlessly through the system.
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
