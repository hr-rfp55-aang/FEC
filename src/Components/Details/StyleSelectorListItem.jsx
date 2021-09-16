import React, { useState, useEffect, useContext } from 'react';

const StyleSelectorListItem = ({style, currentProductStyle, setCurrentProductStyle}) => {
  //console.log('In StyleSLI ', currentProductStyle);
  return (
    <div>
      <img className="stylePhoto" src={style.photos[0].thumbnail_url} alt={style.name} onClick={() => { setCurrentProductStyle(style); }}/>
    </div>
  );
};

export default StyleSelectorListItem;