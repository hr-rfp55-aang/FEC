import React, { useState, useContext } from 'react';
import { postServer, validateEmail } from '../../helpers';
import { ContextObj } from '../../ContextObj.jsx';

const ReviewModalCharEntry = ({ name, charObject, setCharValues, charValues, setCharObj, charObj}) => {
  var qualities = (quality) => {
    if (quality === 'Size') {
      return ['A size too small', '1/2 size to small', 'Perfect', '1/2 size too big', 'A size too wide'];
    }

    if (quality === 'Length') {
      return ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
    }

    if (quality === 'Quality') {
      return ['Poor', 'Below average', 'What I expected', 'pretty great', 'Perfect'];
    }

    if (quality === 'Fit') {
      return ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
    }

    if (quality === 'Comfort') {
      return ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
    }

    return ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  };
  return (
    <div>
      <div>{name}</div>
      <form className='charRadios' onChange={(e)=> { var id = charObject.id; setCharObj({ ...charObj, [id]: Number(e.target.value)}); }}>
        <input type="radio" name="rating" value="1" />
        <input type="radio" name="rating" value="2" />
        <input type="radio" name="rating" value="3" />
        <input type="radio" name="rating" value="4" />
        <input type="radio" name="rating" value="5" />
      </form>
      <div className='charAttBox'>
        <div>{qualities(name)[0]}</div>
        <div>{qualities(name)[1]}</div>
        <div>{qualities(name)[2]}</div>
        <div>{qualities(name)[3]}</div>
        <div>{qualities(name)[4]}</div>
      </div>
    </div>
  );
};

export default ReviewModalCharEntry;