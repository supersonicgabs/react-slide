import React from "react";
import './App.css';
import Slider from "./components/slider.jsx"

function App() {
  const images = [
    {
      id: 1,
      name: "A New Hope",
      url: "https://www.ewbankauctions.co.uk/images/NR011606-1_1.jpg"
    },
    {
      id: 2,
      name: "Empire Strikes Back",
      url: "https://www.bobafettfanclub.com/tn/640x640/multimedia/galleries/albums/userpics/10001/the-empire-strikes-back-poster.jpg"
    },
    {
      id: 3,
      name: "Return Of The Jedi",
      url: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg"
    },
  ]
   
  return (
    <div className="App">
      <Slider mode="slide" images={images} />
    </div>
  );
}

export default App;