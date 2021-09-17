import React, { useState, useEffect } from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = (props) => {
  // set a state of the questions limit starting at 4
  // everytime the button gets clicked, increase that state by 2
  // slice the questions list from 0 to
  var sizeLimit = 4;
  var questionList = props.questions.results;

  return (
    <div>
      {questionList.map((question, index) => (<QAListEntry question={question} key={index} />))}
      <button>More Answered Questions</button>
    </div>
  );
};

export default QAList;