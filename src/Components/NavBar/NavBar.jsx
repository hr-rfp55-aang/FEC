import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj';
import './styles.css';
import { getServer, } from '../../helpers';

const NavBar = (props) => {

  const { productId, setProductId } = useContext(ContextObj);
  const [searchValue, setSearchValue] = useState('');
  const [isLoaded, setIsLoaded] = useState('');

  useEffect(() => {
    setSearchValue('');
    setIsLoaded(true);
  }, [productId]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProductId(Number(searchValue));
    setIsLoaded(false);
  };

  return (
    <div>
      {isLoaded &&
      <form onSubmit={handleSubmit}>
        <div>Search Product Id:</div>
        <div>
          <input value={searchValue} onChange={handleChange} />
        </div>
      </form>}
    </div>
  );

};

export default NavBar;