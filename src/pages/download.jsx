import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DlHeader from "../components/dlheader";
import DlCards from "../components/dlcards";

function Download() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <DlHeader />
        <DlCards />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Download;
