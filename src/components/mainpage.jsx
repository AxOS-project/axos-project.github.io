import "../assets/css/mainpage.css";
import dl_icon from "../assets/img/download_icon.svg";
import img_header from "../assets/img/axpc.png";

const Mainpage = () => {
  function dlclick(e) {
    e.preventDefault();
    window.location.href = "https://github.com/AxOS-project/AxOS/releases/latest";
  }

  return (
    <div className="headerContainer">
      <div className="left">
        <span className="title">AxOS</span>
        <span className="desc">The Linux experience, enhanced.</span>
        <button onClick={dlclick}>
          <img src={dl_icon} alt="dl" />
          <span className="btn">Donwload</span>
        </button>
      </div>
      <div className="right">
        <img src={img_header} alt="img"></img>
      </div>
    </div>
  );
};

export default Mainpage;
