import React, { useState, useEffect, useContext } from 'react';
import missingImg from '../../assets/pants.svg';

const StyleSelectorListItem = ({style, currentProductStyle, setCurrentProductStyle}) => {
  return (
    <div className="productStyle">
      {currentProductStyle.style_id === style.style_id && <span className="styleCheckMark"> &#10003; </span>}
      <img className="stylePhoto" src={style.photos[0].thumbnail_url || missingImg} alt={style.name} onClick={() => { setCurrentProductStyle(style); }}/>
    </div>
  );
};

export default StyleSelectorListItem;