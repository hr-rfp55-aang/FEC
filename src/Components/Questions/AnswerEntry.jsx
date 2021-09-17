import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from '../../ContextObj';
import {formatDate, putServer} from '../../helpers';

const AnswerEntry = (props) => {

  const [answerHelp, setAnswerHelp] = useState(false);
  const [answerHelpfulness, setAnswerHelpfulness] = useState(props.answer.helpfulness);

  const updateAnswerHelp = () => {
    if (!answerHelp) {
      putServer(`/qa/answers/${props.answer.answer_id}/helpful`)
        .then(() => { setAnswerHelp(true); })
        .then(() => { setAnswerHelpfulness(prevState => prevState + 1); })
        .catch((error) => console.log('answer help', error));
    }
  };

  return (
    <div>
      <div>A: {props.answer.body}</div>
      <div>
        <span>by {props.answer.answerer_name}</span>
        <span>, {formatDate(props.answer.date)}  |  </span>
        <span>Helpful?</span>
        <span onClick={updateAnswerHelp}> Yes({answerHelpfulness})  |  </span>
        <span>Report</span>
      </div>
    </div>
  );
};

export default AnswerEntry;