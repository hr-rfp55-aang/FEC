import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ProductCard from './ProductCard';
import './styles.css';


const Carousel = (props) => {
  const {children, show} = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselLength, setCarouselLength] = useState(children.length);

  useEffect(() => {
    setCarouselLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < (carouselLength - show)) {
      setCurrentIndex(prevState => prevState + 1 );
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1 );
    }
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {currentIndex > 0 && <button className='left-arrow' onClick={prev}>&lt;</button>}
        <div className='carousel-content-wrapper'>
          <div className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
            {children}
          </div>
        </div>
        {currentIndex < (carouselLength - show) && <button className='right-arrow' onClick={next}>&gt;</button>}
      </div>
    </div>
  );

};

export default Carousel;