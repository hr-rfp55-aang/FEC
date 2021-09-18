import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import CharacteristicsEntry from './CharacteristicEntry.jsx';

var CharacteristicsList = ({ rating }) => {

  const { reviewMetaObj } = useContext(ContextObj);

  var characteristics = Object.keys(reviewMetaObj.characteristics);


  return (
    <div>
      {characteristics.map((characteristic, index) =>
        <CharacteristicsEntry name={characteristic} CharObj={reviewMetaObj.characteristics[characteristic]} key={index}/>
      )}
    </div>
  );

};

export default CharacteristicsList;