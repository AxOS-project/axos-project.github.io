import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="pre">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <span className="text">
          AxOS made with ❤️ by{" "}
          <a href="https://github.com/levraiardox"> Ardox</a>
        </span>
      </div>
      <div className="right">
        <span className="text">
          &copy; 2024 Ardox. AxOS is distributed under the GNU Public License.{" "}
          <a href="https://github.com/AxOS-project/AxOS/blob/main/LICENSE">
            {" "}
            More informations
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
