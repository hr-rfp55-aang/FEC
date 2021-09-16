import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from '../../ContextObj';
import {formatDate} from '../../helpers';

const AnswerEntry = (props) => {

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