import React, { useState, useEffect, useContext } from 'react';
import QAListEntry from './QAListEntry.jsx';
import {ContextObj} from '../../ContextObj';

const QAList = (props) => {
  // set a state of the questions limit starting at 4
  // everytime the button gets clicked, increase that state by 2
  // slice the questions list from 0 to
  var questionList = props.questions.results;
  const [limit, setLimit] = useState(4);
  const {productId} = useContext(ContextObj);

  useEffect(() => {
    setLimit(4);
  }, [productId]);
  const listHandler = (array) => {
    var clone = array.slice();
    return clone.slice(0, limit);
  };

  const increaseLimit = () => {
    setLimit(prevState => prevState + 2);
  };
  if (questionList.length === 0) {
    return null;
  }
  return (
    <div>
      {listHandler(questionList).map((question, index) => (<QAListEntry question={question} key={index} />))}
      <button onClick={increaseLimit}>More Answered Questions</button>
    </div>
  );
};

export default QAList;