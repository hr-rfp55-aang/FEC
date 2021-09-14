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
  }, [productInfo]);

  return (
    <div>
      <div>Q: {props.question.question_body}</div>
      <div>{answers.results.map((answer) => <AnswerEntry answer={answer}/>)}</div>
    </div>
  );
};

export default QAListEntry;