import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Branches from "./pages/OurBranches";
import TheJourney from "./pages/TheJourney";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll scroll-smooth">

        <Navbar />
        <Home />
        <AboutUs />
        <Branches />

        <TheJourney />
        <ContactUs />
        <Footer />

      </div>
    </>
  );
}

export default App;
