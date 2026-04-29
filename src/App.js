import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Overview from "./components/Overview";
import Tanks from "./components/Tanks";
import Timeline from "./components/Timeline";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Overview />
        <Tanks />
        <Timeline />
        <Resources />
      </main>
      <Footer />
    </>
  );
}

export default App;
