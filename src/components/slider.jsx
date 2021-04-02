import {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import '../App.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = ({mode}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [className, setClassName] = useState('')

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
  
    const prevSlide=()=>{
      setActiveImageIndex(activeImageIndex!==0 ? activeImageIndex - 1 : images.length-1)
      setClassName(mode === 'slide' ? 'animation-slide-left' : 'animation-fade')
      setTimeout(()=>{
        setClassName('')
      }, 400)
    }
  
    const nextSlide=()=>{
      setActiveImageIndex(activeImageIndex!==images.length-1 ? activeImageIndex + 1 : 0)
      setClassName(mode === 'slide' ? 'animation-slide-right' : 'animation-fade')
      setTimeout(()=>{
        setClassName('')
      }, 400)    
    }
  
    return (
      <div className="App">
        <div className="carousel-details">
          <button type="button" onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <img src={images[activeImageIndex].url} alt={images[activeImageIndex].name} className={className} />
          <button type="button" onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    );    
}

Slider.propTypes = {
    mode: PropTypes.oneOf(['fade', 'slide']).isRequired
}
export default Slider