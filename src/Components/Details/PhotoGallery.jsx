import React, { useState, useEffect, useContext } from 'react';
import ThumbnailList from './ThumbnailList';
import { ContextObj } from '../../ContextObj.jsx';

const PhotoGallery = ({ currentProductStyle }) => {

  const { productInfo } = useContext(ContextObj);

  const defaultImg = 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';

  const [mainPhoto, setMainPhoto] = useState(currentProductStyle.photos[0] || {});

  const mainPhotoName = currentProductStyle.name || 'Product Image';

  useEffect(() => {
    setMainPhoto(currentProductStyle.photos[0] || {});
  }, [currentProductStyle]);
  console.log('In Photo Gallery ', currentProductStyle);

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [length, setLength] = useState(children.length);

  // const next = () => {
  //   if (currentIndex < (length - 1)) {
  //     setCurrentIndex(prevState => prevState + 1);
  //   }
  // };

  // const prev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(prevState => prevState - 1);
  //   }
  // };

  // // Set the length to match current children from props
  // useEffect(() => {
  //   setLength(children.length);
  // }, [children]);

  return (
    <div>
      <div className="productPhotos">
        <ThumbnailList productPhotos={currentProductStyle.photos} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} currentProductStyle={currentProductStyle} />
        <div>
          {
            <button className="MIleftArrow">
              &larr;
            </button>
          }
        </div>
        <div>
          <img className="displayedPhoto" src={mainPhoto.url} alt={mainPhotoName} />
        </div>
        <div>
          {
            <button className="MIrightArrow">
              &rarr;
            </button>
          }
        </div>

      </div>

      {/* Product Description */}

      <div className="descriptionAndFeatures">

        <div>
          <div className="slogan">{productInfo.slogan}</div>
          <span className="detailedDescription"> {productInfo.description}</span>
        </div>

        <div>
          <ul>
            {productInfo.features.map((feature) => {
              return <li>{feature.feature}: {feature.value} </li>;
            })}
          </ul>
        </div>

      </div>

    </div>
  );
};
export default PhotoGallery;