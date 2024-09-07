import Navbar from "../components/navbar";
import Mainpage from "../components/mainpage";
import WelcomeSection from "../components/welcomesection";
import Beautiful from "../components/beautiful";
import Powerful from "../components/powerful";
import OpenSource from "../components/openSource";
import Secure from "../components/secure";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <Mainpage />
        <WelcomeSection />
        <Beautiful />
        <Powerful />
        <OpenSource />
        <Secure />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
