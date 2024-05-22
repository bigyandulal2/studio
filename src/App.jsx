import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VR from "./components/VR";
import Creation from "./components/Creation";
import Footer from "./components/Footer";
import "./App.css";
import "./query.css";
export default function App() {
  return (
    <div className="parent">
      <div className="app">
        <Navbar />
        <Hero />
      </div>
      <VR />
      <Creation />
      <Footer />
    </div>
  );
}
