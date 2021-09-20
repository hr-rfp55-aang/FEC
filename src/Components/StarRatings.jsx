import React, { useContext } from 'react';
import '../../assets/empty-star.svg';
import '../../assets/star.svg';
import '../../assets/star-one-quarter.svg';
import '../../assets/star-half.svg';
import '../../assets/star-three-quarter.svg';
import { ContextObj } from '../ContextObj.jsx';


const StarRating = ({rating}) => {
  const { ratingAvg } = useContext(ContextObj);

  const emptySvg = '../../assets/empty-star.svg';
  const fullSvg = '../../assets/star.svg';
  const quarterSvg = '../../assets/star-one-quarter.svg';
  const halfSvg = '../../assets/star-half.svg';
  const threeQuarterSvg = '../../assets/star-three-quarter.svg';


  let ratingRounded = Math.round(rating * 4) / 4;
  let fullStars = Math.floor(ratingRounded);
  let partialStar = ratingRounded - fullStars;
  let emptyStars = Math.floor(5 - fullStars - partialStar);

  let starArr = [];
  let partial = true;
  for (let i = 0; i < 5; i++) {
    if (fullStars > i) {
      starArr.push(1);
    } else if (partial) {
      partial = false;
      starArr.push(partialStar);
    } else {
      starArr.push(0);
    }
  }

  return (
    <div className='starBar'>
      {starArr.map((star, index) => {
        if (star === 1) {
          return (<img src={fullSvg} key={index}/>);
        } else if (star === 0.25) {
          return (<img src={quarterSvg} key={index}/>);
        } else if (star === 0.5) {
          return (<img src={halfSvg} key={index}/>);
        } else if (star === 0.75) {
          return (<img src={threeQuarterSvg} key={index}/>);
        } else {
          return (<img src={emptySvg} key={index}/>);
        }
      })}
    </div>
  );

};

export default StarRating;