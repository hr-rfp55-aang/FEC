import React, { useState, useEffect, useContext } from 'react';
import ThumbnailList from './ThumbnailList';
import MainPhotoModal from './MainPhotoModal.jsx';
import { ContextObj } from '../../ContextObj.jsx';

const PhotoGallery = ({ currentProductStyle }) => {
  const { productInfo } = useContext(ContextObj);
  const [mainPhoto, setMainPhoto] = useState(currentProductStyle.photos[0] || {});
  const mainPhotoName = currentProductStyle.name || 'Product Image';
  const photos = currentProductStyle.photos;
  const index = photos.findIndex(photo => photo.url === mainPhoto.url);
  const [enlargeMainPhoto, setEnlargeMainPhoto] = useState(false);
  // console.log('In Photo Gallery ', currentProductStyle);

  useEffect(() => {
    setMainPhoto(currentProductStyle.photos[0] || {});
  }, [currentProductStyle]);

  const getNextImage = () => {
    setMainPhoto(photos[(index + 1) % photos.length]);
    document.querySelector(`img[src~="${mainPhoto.thumbnail_url}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const getPreviousImage = () => {
    setMainPhoto(photos[(index || photos.length) - 1]);
    document.querySelector(`img[src~="${mainPhoto.thumbnail_url}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <div className="productPhotos">
        <ThumbnailList productPhotos={currentProductStyle.photos} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} currentProductStyle={currentProductStyle} />
        <div>
          {
            index > 0 ?
              <button onClick={getPreviousImage} className="MIleftArrow">
                &larr;
              </button> : null
          }
        </div>
        {/* Main Displayed Photo */}
        <div className="mainPhotoContainer">
          <img className="displayedPhoto" src={mainPhoto.url} alt={mainPhotoName} />
          <button className="buttonToEnlarge" onClick={() => setEnlargeMainPhoto(true)}>&#128269;</button>
        </div>
        <div>
          {
            index < photos.length - 1 ?
              <button onClick={getNextImage} className="MIrightArrow">
                &rarr;
              </button> : null
          }
        </div>

      </div>

      <MainPhotoModal mainPhoto={mainPhoto} enlargeMainPhoto={enlargeMainPhoto} closeMainPhotoModal={() => setEnlargeMainPhoto(false)} productPhotos={currentProductStyle.photos} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} currentProductStyle={currentProductStyle} index={index} photos={photos} getNextImage={getNextImage} getPreviousImage={getPreviousImage}/>

      {/* Product Description */}
      <div className="descriptionAndFeatures">
        <div>
          <div className="slogan">{productInfo.slogan}</div>
          <span className="detailedDescription"> {productInfo.description}</span>
        </div>

        <div>
          <ul>
            {productInfo.features.map((feature) => {
              return <li key={feature.feature}>{feature.feature}: {feature.value} </li>;
            })}
          </ul>
        </div>

      </div>
    </div>
  );
};
export default PhotoGallery;