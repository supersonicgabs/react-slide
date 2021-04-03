import {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import '../App.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = ({mode, images}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [className, setClassName] = useState('')
  
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
    mode: PropTypes.oneOf(['fade', 'slide']),
    images: PropTypes.array
}
export default Slider