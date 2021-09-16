import React, { useState, useEffect, useContext } from 'react';
import StyleSelectorListItem from './StyleSelectorListItem.jsx';

const StyleSelector = ({ productStyles, currentProductStyle, setCurrentProductStyle }) => {
  // console.log('in StyleSelector ', productStyles);

  return (
    <div className="styleSelector">
      {/* Limit it to 4 displayed per line */}
      {productStyles.map((style, index) => {
        return <StyleSelectorListItem style={style} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle}/>;
      })}
    </div>
  );
};

export default StyleSelector;