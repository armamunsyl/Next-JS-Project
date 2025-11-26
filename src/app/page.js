// import Navbar from "./components/Navbar";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopularItems from "./components/PopularItems";

export default function Home() {
  return (
    <div className="max-w-11/12 mx-auto">
     <Hero></Hero>
     <Features></Features>
     <PopularItems></PopularItems>
    </div>
  );
}
