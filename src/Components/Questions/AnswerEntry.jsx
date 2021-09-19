import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from '../../ContextObj';
import {formatDate, putServer} from '../../helpers';

const AnswerEntry = (props) => {

  const [answerHelp, setAnswerHelp] = useState(false);
  const [answerHelpfulness, setAnswerHelpfulness] = useState(props.answer.helpfulness);
  const [reported, setReported] = useState(false);

  var report;
  var seller;

  const updateAnswerHelp = () => {
    if (!answerHelp) {
      putServer(`/qa/answers/${props.answer.answer_id}/helpful`)
        .then(() => { setAnswerHelp(true); })
        .then(() => { setAnswerHelpfulness(prevState => prevState + 1); })
        .catch((error) => console.log('answer help', error));
    }
  };

  const reportAnswer = () => {
    putServer(`/qa/answers/${props.answer.answer_id}/report`)
      .then(() => { setReported(true); })
      .catch((error) => console.log('reported', error));
  };

  if (props.answer.answerer_name === 'Seller') {
    seller = <span style={{fontWeight: 'bold'}}>{props.answer.answerer_name}</span>;
  } else {
    seller = <span>by {props.answer.answerer_name}</span>;
  }

  if (reported) {
    report = <span>Reported</span>;
  } else {
    report = <span onClick={reportAnswer}>Report</span>;
  }

  return (
    <div>
      <div>A: {props.answer.body}</div>
      <div>
        <span>by </span>
        {seller}
        <span>, {formatDate(props.answer.date)}  |  </span>
        <span>Helpful?</span>
        <span onClick={updateAnswerHelp}> Yes({answerHelpfulness})  |  </span>
        {report}
      </div>
    </div>
  );
};

export default AnswerEntry;