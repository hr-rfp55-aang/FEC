import React, { useState, useEffect, useContext } from 'react';
import QAListEntry from './QAListEntry.jsx';
import {ContextObj} from '../../ContextObj';
import QuestionSearch from './QuestionSearch.jsx';

const QAList = (props) => {
  var questionList = props.questions;
  var listButton;

  const [qLimit, setQLimit] = useState(4);
  const {productId} = useContext(ContextObj);

  useEffect(() => {
    setQLimit(4);
  }, [productId]);

  const listHandler = (array) => {
    var clone = array.slice();
    return clone.slice(0, qLimit);
  };

  const increaseLimit = () => {
    setQLimit(prevState => prevState + 2);
  };

  if (questionList.length === 0) {
    return null;
  }

  if (questionList.length - listHandler(questionList).length === 0) {
    listButton = null;
  } else {
    listButton = <button onClick={increaseLimit}>More Answered Questions</button>;
  }

  return (
    <div >
      <div className="qa-list">
        {listHandler(questionList).map((question, index) => (<QAListEntry question={question} key={index} />))}
      </div>
      <div>
        {listButton}
      </div>
    </div>
  );
};

export default QAList;