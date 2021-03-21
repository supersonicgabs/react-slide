import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { SwitchTransition, CSSTransition } from "react-transition-group";


function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
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
      <div className="carousel-details">
        <button type="button" onClick={()=>setActiveImageIndex(activeImageIndex!==0 ? activeImageIndex - 1 : images.length-1)}>
          <FaAngleLeft />
        </button>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activeImageIndex}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <img src={images[activeImageIndex].url} alt={images[activeImageIndex].name} />
          </CSSTransition>
        </SwitchTransition>
        <button type="button" onClick={()=>setActiveImageIndex(activeImageIndex!==images.length-1 ? activeImageIndex + 1 : 0)}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default App;
