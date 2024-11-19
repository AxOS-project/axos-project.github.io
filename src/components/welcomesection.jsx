import "../assets/css/welcomesection.css"

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="textContainer">
        <div className="headSection">
          <span className="title">Welcome to AxOS.</span>
          <span className="desc">
            The beauty serving the beast.
          </span>
        </div>
        <span className="desc">
          Searching for an operating system that is both beautiful and powerful? Look no further.
          With a beautiful user interface and powerful features,  AxOS is the perfect operating system for you.
          Focus on the beauty, performances and functionalities of your computer with AxOS.
        </span>
      </div>
    </section>
  );
};

export default WelcomeSection