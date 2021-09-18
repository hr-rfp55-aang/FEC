import React, { useState, useEffect, useContext } from 'react';
import StyleSelectorListItem from './StyleSelectorListItem.jsx';

const StyleSelector = ({ productStyles, currentProductStyle, setCurrentProductStyle }) => {
  // console.log('in StyleSelector ', productStyles);

  return (
    <div className="styles">
      <div className="styleName"> STYLE: {currentProductStyle.name}</div>
      <div className="styleSelector">
        {/* Limit it to 4 displayed per line */}
        {productStyles.map((style, index) => {
          return <StyleSelectorListItem key={index} style={style} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle} />;
        })}
      </div>
    </div>
  );
};

export default StyleSelector;