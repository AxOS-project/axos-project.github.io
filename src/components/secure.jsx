import React from "react";
import secure_img from "../assets/img/lock.svg";
import "../assets/css/secure.css";

const Secure = () => {
  return (
    <div className="secure">
      <div className="textContainer">
        <div className="headSection">
          <span className="title">Private.</span>
          <span className="desc">No data leaks.</span>
        </div>
        <span className="desc">
          AxOS is also built with your privacy in mind. Absolutely no data is
          sent to our developers. Your personal information, usage data, and
          system activities stay completely on your device, ensuring total
          privacy. We don’t collect, track, or store anything, giving you full
          control over your data. In AxOS, every interaction remains entirely
          private, with no backdoors or hidden data collection processes. Your
          system, your data.
        </span>
      </div>
      <div className="imgContainer">
        <img src={secure_img} alt="secure"></img>
      </div>
    </div>
  );
};

export default Secure;
