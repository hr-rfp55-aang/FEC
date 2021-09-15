import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {ContextObj} from '../../ContextObj';
import AnswerEntry from './AnswerEntry.jsx';

const QAListEntry = (props) => {
  const {productInfo, getServer} = useContext(ContextObj);
  const [answers, setAnswers] = useState({results: []});
  const questionId = props.question.question_id;

  useEffect(() => {
    getServer(`/qa/questions/${questionId}/answers`, (result) => setAnswers(result));
  }, [questionId]);


  return (
    <div>
      <div>
        Q: {props.question.question_body}
        <span>  |  Helpful? Yes ({props.question.question_helpfulness})</span>
        <span>  |  Add Answer</span>
      </div>
      <div>{answers.results.map((answer, index) => <AnswerEntry answer={answer} key={index}/>)}</div>
    </div>
  );
};

export default QAListEntry;