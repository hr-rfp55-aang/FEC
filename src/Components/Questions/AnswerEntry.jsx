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

  if (reported) {
    report = <span>Reported</span>;
  } else {
    report = <span className="link" onClick={reportAnswer}>Report</span>;
  }

  if (props.answer.answerer_name === 'Seller' || props.answer.answerer_name === 'seller') {
    seller =
    <div className="sellerSig">
      <span>by</span> <span style={{fontWeight: 'bold'}}> {props.answer.answerer_name}</span>
      <span>, {formatDate(props.answer.date)}  |  </span>
      <span>Helpful?</span>
      <span className="link" onClick={updateAnswerHelp}> Yes({answerHelpfulness})</span>  <span>| </span>
      {report}
    </div>;
  } else {
    seller =
    <div className="sellerSig">
      <span>by {props.answer.answerer_name}</span>
      <span>, {formatDate(props.answer.date)}  |  </span>
      <span>Helpful?</span>
      <span className="link" onClick={updateAnswerHelp}> Yes({answerHelpfulness})</span>  <span>| </span>
      {report}
    </div>;
  }

  return (
    <div className="aEntry">
      <span className="qLetter">A:</span>
      <div className="qText">
        {props.answer.body}
      </div>
      {seller}
    </div>
  );
};

export default AnswerEntry;