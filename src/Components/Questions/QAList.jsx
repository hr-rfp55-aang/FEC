import React, {useState, useEffect} from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = (props) => {

  return (
    <div>
      <div>Questions & Answers</div>
      {props.questions.results.map((question) => (<QAListEntry question={question} />))}
    </div>
  );
};

export default QAList;