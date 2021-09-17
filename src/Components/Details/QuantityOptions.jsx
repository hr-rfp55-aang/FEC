import React, { useState, useEffect, useContext } from 'react';

const QuantityOptions = ({ quantity }) =>
  <option name={quantity} value={quantity} >
    {quantity}
  </option>;

export default QuantityOptions;