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
          Underneath its sleek design lies a robust foundation engineered to
          handle complex tasks with ease. AxOS leverages cutting-edge technology
          to deliver lightning-fast processing speeds and seamless multitasking,
          ensuring that you can tackle any challenge without missing a beat.
          From running resource-intensive applications to managing large
          datasets, AxOS empowers users with the computing power needed to excel
          in today's digital landscape. Its optimized performance ensures smooth
          operation even under the most demanding workloads, enhancing
          efficiency and productivity.
        </span>
      </div>
      <div className="imgContainer">
        <img src={powerful_img} alt="powerful"></img>
      </div>
    </div>
  );
};

export default Powerful;
