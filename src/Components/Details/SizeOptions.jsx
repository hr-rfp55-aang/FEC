import React, { useState, useEffect, useContext } from 'react';

const SizeOptions = ({sku, size, currentSize, setCurrentSize}) => {

  return (
    <option value={size.size}>
      {size.size}
    </option>);

};

export default SizeOptions;
