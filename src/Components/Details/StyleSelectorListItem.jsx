import React, { useState, useEffect, useContext } from 'react';

const StyleSelectorListItem = ({style, currentProductStyle, setCurrentProductStyle}) => {
  // console.log('In StyleSLI ', currentProductStyle.style_id, style.style_id);

  return (
    <div className="productStyle">
      {currentProductStyle.style_id === style.style_id && <span className="styleCheckMark"> &#10003; </span>}
      <img className="stylePhoto" src={style.photos[0].thumbnail_url} alt={style.name} onClick={() => { setCurrentProductStyle(style); }}/>
    </div>
  );
};

export default StyleSelectorListItem;