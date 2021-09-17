import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {ContextObj} from '../../ContextObj';
import AnswerEntry from './AnswerEntry.jsx';
import AnswerModal from './AnswerModal.jsx';
import { getServer, grabReviewScore, formatDate, putServer } from '../../helpers';

const QAListEntry = (props) => {
  const {productInfo, productId} = useContext(ContextObj);
  const [answers, setAnswers] = useState({results: []});
  const [showAnswers, setShowAnswers] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  const [questionHelpfulness, setQuestionHelpfulness] = useState(props.question.question_helpfulness);
  const [newAnswer, setNewAnswer] = useState('');
  const questionId = props.question.question_id;

  useEffect(() => {
    getServer(`/qa/questions/${questionId}/answers?count=100`)
      .then((result) => {
        setAnswers(result);
      })
      .catch((error) => console.log('answers', error));
  }, [questionId, newAnswer]);

  const updateQuestionHelp = () => {
    if (!questionHelp) {
      putServer(`/qa/questions/${questionId}/helpful`)
        .then(() => { setQuestionHelp(true); })
        .then(() => { setQuestionHelpfulness(prevState => prevState + 1); })
        .catch((error) => console.log('helpfulness', error));
    }
  };

  const sortAnswersBySeller = (answers) => {
    var sellers = [];
    var result = [];
    for (var i = 0; i < answers.results.length; i++) {
      var answer = answers.results[i];
      if (answer.answerer_name === 'Seller') {
        sellers.push(answer);
      } else {
        result.push(answer);
      }
    }
    for (var i = sellers.length - 1; i >= 0; i--) {
      result.unshift(sellers[i]);
    }
    return result;
  };



  return (
    <div>
      <div>
        Q: {props.question.question_body}
        <span>  |  Helpful?</span>
        <span onClick={updateQuestionHelp}> Yes ({questionHelpfulness})</span>
        <span onClick={() => setShowAnswers(true)}>  |  Add Answer</span>
      </div>
      <div><AnswerModal setNewAnswer={setNewAnswer} onClose={() => setShowAnswers(false)} name={productInfo.name} question={props.question.question_body} qId={props.question.question_id} show={showAnswers}/></div>
      <div>{sortAnswersBySeller(answers).map((answer, index) => <AnswerEntry answer={answer} key={index}/>)}</div>
    </div>
  );
};

export default QAListEntry;