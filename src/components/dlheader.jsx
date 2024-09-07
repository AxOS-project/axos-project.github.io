import React from "react";
import "../assets/css/dlheader.css";

const DlHeader = () => {
  return (
    <header className="donwloadheader">
      <div className="downloadHeaderTextContainer">
        <span className="title">Download and install AxOS</span>
        <span className="desc">
          You can chose which edition you want. Thanks for your trust !
        </span>
      </div>
    </header>
  );
};

export default DlHeader;
