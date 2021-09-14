import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from '../../ContextObj';

const AnswerEntry = (props) => {
  const {formatDate} = useContext(ContextObj);

  return (
    <div>
      <div>A: {props.answer.body}</div>
      <div>
        <span>by {props.answer.answerer_name}</span>
        <span>, {formatDate(props.answer.date)}  |  </span>
        <span>Helpful? Yes({props.answer.helpfulness})  |  </span>
        <span>Report</span>
      </div>
    </div>
  );
};

export default AnswerEntry;