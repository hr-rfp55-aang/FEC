import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {ContextObj} from '../../ContextObj';
import AnswerEntry from './AnswerEntry.jsx';
import AnswerModal from './AnswerModal.jsx';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const QAListEntry = (props) => {
  const {productInfo} = useContext(ContextObj);
  const [answers, setAnswers] = useState({results: []});
  const questionId = props.question.question_id;
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    getServer(`/qa/questions/${questionId}/answers`)
      .then((result) => setAnswers(result));
  }, [questionId]);


  return (
    <div>
      <div>
        Q: {props.question.question_body}
        <span>  |  Helpful? Yes ({props.question.question_helpfulness})</span>
        <span onClick={() => setShowAnswers(true)}>  |  Add Answer</span>
      </div>
      <div><AnswerModal onClose={() => setShowAnswers(false)} name={productInfo.name} question={props.question.question_body} show={showAnswers}/></div>
      <div>{answers.results.map((answer, index) => <AnswerEntry answer={answer} key={index}/>)}</div>
    </div>
  );
};

export default QAListEntry;