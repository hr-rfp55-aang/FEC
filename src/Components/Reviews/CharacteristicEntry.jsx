import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

var CharacteristicsEntry = ({ name, CharObj }) => {

  console.log(name, CharObj);

  var qualities = (quality) => {
    if (quality === 'Fit' || quality === 'Size') {
      return ['Too small', 'Too big', 'Perfect'];
    }

    if (quality === 'Length' || quality === 'Width') {
      return ['Too short', 'Too long', 'Perfect'];
    }

    if (quality === 'Comfort' || quality === 'Quality') {
      return ['Poor', 'Great', ''];
    }
  };

  var filters = { left: `${(CharObj.value) * 18}%` };
  return (

    <div className='box-container'>
      <div>{name}</div><div className='box'><div className='otherBox' style={filters}></div></div>
      <div className='first'>{qualities(name)[0]}</div>
      <div className='second'>{qualities(name)[2]}</div>
      <div className='third'>{qualities(name)[1]}</div>
    </div>
  );

};

export default CharacteristicsEntry;