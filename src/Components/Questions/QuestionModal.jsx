import React, {useState} from 'react';
import { postServer, validateEmail } from '../../helpers';

const QuestionModal = (props) => {
  const [qModalBody, setQModalBody] = useState('');
  const [qModalName, setQModalName] = useState('');
  const [qModalEmail, setQModalEmail] = useState('');

  const qModalBodyHandler = () => {
    setQModalBody(event.target.value);
  };

  const qModalNameHandler = () => {
    setQModalName(event.target.value);
  };

  const qModalEmailHandler = () => {
    setQModalEmail(event.target.value);
  };

  const submitQuestion = (body, name, email, id) => {

    postServer('/qa/questions', {
      body: body,
      name: name,
      email: email,
      product_id: id
    })
      .then(() => props.setNewQuestion(JSON.stringify({
        body: body,
        name: name,
        email: email,
        product_id: id
      })))
      .then(() => props.onClose());

  };

  if (!props.show) {
    return null;
  }
  var qWarning;
  var nWarning;
  var eWarning;

  if (qModalBody.length > 0) {
    qWarning = null;
  } else {
    qWarning = <span className="aWarningText">Please ask a question</span>;
  }

  if (qModalName.length > 0) {
    nWarning = null;
  } else {
    nWarning = <span className='aNameText'>Please enter your nickname</span>;
  }


  if (validateEmail(qModalEmail)) {
    eWarning = null;
  } else {
    eWarning = <span className='aEmailText'>Please enter a valid email</span>;
  }

  return (
    <div className="q-modal" onClick={props.onClose}>
      <div className="a-modal-content" onClick={e => e.stopPropagation()}>
        <div className="a-modal-header">
          <h2 className="a-modal-title">Ask Your Question about the... </h2>
          <h4 className="questionSub"> {props.name}</h4>
        </div>
        <div className="a-modal-body">
          <div className="a-text">
            <label className="a-label">
              * Your Question:
            </label>
            <textarea type="text" className="a-textarea" maxLength={1000} onChange={qModalBodyHandler}></textarea>
          </div>
          <div className="a-name">
            <label className="a-label">
              * What is your nickname?
              <input className="a-name-box" maxLength={60} onChange={qModalNameHandler} type="text" placeholder="Example: jackson11!"></input>
            </label>
            <div className="warning">
              For privacy reasons, do not use your full name or email address
            </div>
          </div>
          <div>
            <label className="a-label">
              * Your email:
              <input className="a-email-box" maxLength={60} onChange={qModalEmailHandler} type="text" placeholder="Why did you like the product or not?"></input>
            </label>
            <div className="warning">
                For authentication reasons you will not be emailed
            </div>
            <div className="warning">* Indicates a required field</div>
          </div>
        </div>
        <div className="a-modal-footer">
          <button className="q-button" onClick={() => submitQuestion(qModalBody, qModalName, qModalEmail, props.productId)}>Submit</button>
          {qWarning} {nWarning} {eWarning}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;