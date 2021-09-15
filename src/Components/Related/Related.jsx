// import React, { useState, useEffect, useContext } from 'react';
// import { ContextObj } from '../../ContextObj.jsx';
// import Outfits from './Outfits';
// import ProductCard from './ProductCard';
// import './styles.css';

// const Related = () => {

//   const { productInfo, getServer } = useContext(ContextObj);
//   const [relatedItems, setRelatedItems] = useState([40344]);
//   const id = productInfo.id;
//   // console.log('related id:', id);

//   useEffect(() => {
//     getServer(`/products/${id}/related`, (result) => setRelatedItems(result) );
//   }, []);

//   return (
//     <div className='relatedCarousel'>
//       {relatedItems.map( (item, index) => {
//         return <ProductCard key={index} item={item}/>;
//       })}
//       <Outfits />
//     </div>
//   );
// };

// export default Related;
