import React, { useState, useEffect } from 'react';
import './styles.css';

const ThumbnailCarousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div className="ThumbnailCarousel-container">
      <div className="ThumbnailCarousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={prev} className="up-arrow">
            &uarr;
          </button>
        }
        <div className="ThumbnailCarousel-content-wrapper">
          <div id="ThumbnailCarousel-content" className="ThumbnailCarousel-content" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
            {children}
          </div>
        </div>
        {currentIndex < (length - 1) &&
          <button onClick={next} className="down-arrow">
            &darr;
          </button>
        }
      </div>
    </div>
  );
};

export default ThumbnailCarousel;