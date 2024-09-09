import "../assets/css/Navbar.css";

const Navbar = () => {
  function redirect(e) {
    e.preventDefault();
    window.location.href = "/";
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navtitle" onClick={redirect}>
          <div className="logo">
            <img
              src="https://avatars.githubusercontent.com/u/147983433?s=400&u=b8cfab59af560726ae5e9df9078ca5b72e57af7f&v=4"
              alt="logo"
              className="logo-image"
            />
          </div>
          <h1 className="navtitletext">AxOS</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="https://github.com/axos-project">Github</a>
          </li>
          <li>
            <a href="https://wiki.axos-project.com">Docs</a>
          </li>
          <li>
            <a href="https://discord.gg/xQdtDBFmsy">Discord</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
