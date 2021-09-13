import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../ProductContext.jsx';


const Outfits = () => {

  console.log('related:', useContext(ProductContext));
  return(
    <div>
      Outfits
    </div>
  )
}

export default Outfits;