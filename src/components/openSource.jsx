import React from "react";
import "../assets/css/opensource.css";
import openImg from "../assets/img/github_icon_btn.svg";

const OpenSource = () => {

  function ghclick(e) {
    e.preventDefault();
    window.location.href = "https://github.com/axos-project";
  }

  return (
    <div className="free_and_open_source">
      <div className="bg">
        <div className="text">
          <div className="top">
            <span className="title">Free & Open Source.</span>
            <span className="desc">
              You don't have to, and will never have to pay.
            </span>
          </div>
          <div className="center">
            <span className="desc">
              AxOS is built on free and open-source software which does not
              require any payment to be used.
              <br />
              All system components are free and open source, meaning the code
              is available for your review, contribution, or forking.
            </span>
          </div>
          <div className="bottom">
            <button onClick={ghclick}>
              <img src={openImg} alt="ghicon"></img>
              <span className="btn">View on github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
