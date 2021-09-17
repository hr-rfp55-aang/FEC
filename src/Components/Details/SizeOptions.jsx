import React from 'react';

const SizeOptions = ({ sku, size }) =>
  <option name={size.size} value={sku}>
    {size.size}
  </option>;

export default SizeOptions;
