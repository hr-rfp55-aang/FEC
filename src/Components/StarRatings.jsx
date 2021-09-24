import React, { useContext } from 'react';
import emptySvg from '../assets/empty-star.svg';
import fullSvg from '../assets/star.svg';
import quarterSvg from '../assets/star-one-quarter.svg';
import halfSvg from '../assets/star-half.svg';
import threeQuarterSvg from '../assets/star-three-quarter.svg';
import { ContextObj } from '../ContextObj.jsx';


const StarRating = (props) => {
  const { ratingAvg } = useContext(ContextObj);

  const extraClass = props.classParam || null;

  let ratingRounded = Math.round(props.rating * 4) / 4;
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
    <div className={`starBarTest ${extraClass}`}>
      {starArr.map((star, index) => {
        if (star === 1) {
          return (<img src={fullSvg} key={index} alt='full star'/>);
        } else if (star === 0.25) {
          return (<img src={quarterSvg} key={index} alt='quarter star'/>);
        } else if (star === 0.5) {
          return (<img src={halfSvg} key={index} alt='half star'/>);
        } else if (star === 0.75) {
          return (<img src={threeQuarterSvg} key={index} alt='three quarter star'/>);
        } else {
          return (<img src={emptySvg} key={index} alt='empty star'/>);
        }
      })}
    </div>
  );

};

export default StarRating;