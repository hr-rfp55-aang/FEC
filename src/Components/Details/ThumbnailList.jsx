import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import ThumbnailListItem from './ThumbnailListItem';
import { ContextObj } from '../../ContextObj.jsx';

const ThumbnailList = ({ productPhotos, mainPhoto, setMainPhoto, mainPhotoName, setMainPhotoName }) => {
  //console.log('In ThumbnailList ', productPhotos);

  const defaultThumbnail = 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  const [mainThumbnail, setMainThumbnail] = useState(
    productPhotos.length > 0 ? productPhotos[0].thumbnail_url : defaultThumbnail
  )

  return (
    <div className="thumbnailList">
      {(productPhotos || []).map((photo, index) => {
        return <ThumbnailListItem key={index} index={index.toString()} img={photo.thumbnail_url} photo={photo.url} mainPhoto={setMainPhoto} setMainPhoto={setMainPhoto} mainThumbnail={mainThumbnail} setMainThumbnail={setMainThumbnail} mainPhotoName={mainPhotoName} setMainPhotoName={setMainPhotoName}/>
      })}
    </div>
  );
};

export default ThumbnailList;