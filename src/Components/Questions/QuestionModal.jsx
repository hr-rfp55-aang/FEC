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

  if (qModalBody.length > 1) {
    qWarning = null;
  } else {
    qWarning = <span className="qWarningText">Please ask a question</span>;
  }

  if (qModalName.length > 1) {
    nWarning = null;
  } else {
    nWarning = <span className='nameText'>Please enter your nickname</span>;
  }


  if (validateEmail(qModalEmail)) {
    eWarning = null;
  } else {
    eWarning = <span className='emailText'>Please enter a valid email</span>;
  }

  return (
    <div className="q-modal" onClick={props.onClose}>
      <div className="q-modal-content" onClick={e => e.stopPropagation()}>
        <div className="q-modal-header">
          <span className="q-modal-title">Ask Your Question about the </span>
          <span className="q-modal-subtitle"> {props.name}</span>
        </div>
        <div className="q-modal-body">
          <div className="question-form">
            <div className="question-grid">
              <label className="q-label">
                * Your Question:
              </label>
              <textarea type="text" className="modal-text-box" maxLength={1000} onChange={qModalBodyHandler}></textarea>
            </div>
            <div>
              <label>
                * What is your nickname?
                <input className="q-modal-text" maxLength={60} onChange={qModalNameHandler} type="text" placeholder="Example: jackson11!"></input>
              </label>
              <div className="warning">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <label>
                * Your email:
                <input className="q-modal-text email-text-box" maxLength={60} onChange={qModalEmailHandler} type="text" placeholder="Why did you like the product or not?"></input>
              </label>
              <div className="warning">
                  For authentication reasons you will not be emailed
              </div>
              <div className="warning">* Indicates a required field</div>
            </div>
          </div>
        </div>
        <div className="q-modal-footer">
          <button className="q-button" onClick={() => submitQuestion(qModalBody, qModalName, qModalEmail, props.productId)}>Submit</button>
          {qWarning} {nWarning} {eWarning}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;