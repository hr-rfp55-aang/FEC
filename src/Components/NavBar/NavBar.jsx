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
      <div className="topHeader">
        <h2 className="title">TrouserBrowser</h2>
        {isLoaded &&
          <form onSubmit={handleSubmit} className="searchBar">
            <label className='navSearchBarTitle' htmlFor='navSearchBar'>Search Product Id:</label><br />
            <input id='navSearchBar' name='navSearchBar' value={searchValue} onChange={handleChange} placeholder='Product Id...' />
          </form>}
      </div>
      <div className='saleBar'><div className='salePhrase'>TROUSER BROWSER POWER HOUR: UP TO 70% Off Select Styles</div></div>
    </div>
  );

};

export default NavBar;