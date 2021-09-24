import React, { useState, useEffect, useContext } from 'react';
import { postServer, validateEmail } from '../../helpers';


const AnswerModal = (props) => {
  const [aModalBody, setAModalBody] = useState('');
  const [aModalName, setAModalName] = useState('');
  const [aModalEmail, setAModalEmail] = useState('');

  const aModalBodyHandler = () => {
    setAModalBody(event.target.value);
  };

  const aModalNameHandler = () => {
    setAModalName(event.target.value);
  };

  const aModalEmailHandler = () => {
    setAModalEmail(event.target.value);
  };

  const submitAnswer = (body, name, email, id) => {

    postServer(`/qa/questions/${id}/answers`, {
      body: body,
      name: name,
      email: email
    })
      .then(() => props.setNewAnswer(JSON.stringify({
        body: body,
        name: name,
        email: email
      })))
      .then(() => props.onClose());

  };

  if (!props.show) {
    return null;
  }

  var aWarning;
  var nWarning;
  var eWarning;

  if (aModalBody.length > 1) {
    aWarning = null;
  } else {
    aWarning = <span className="aWarningText">Please provide an answer</span>;
  }

  if (aModalName.length > 1) {
    nWarning = null;
  } else {
    nWarning = <span className='aNameText'>Please enter your nickname</span>;
  }


  if (validateEmail(aModalEmail)) {
    eWarning = null;
  } else {
    eWarning = <span className='aEmailText'>Please enter a valid email</span>;
  }

  return (
    <div className="q-modal" onClick={props.onClose}>
      <div className="a-modal-content" onClick={e => e.stopPropagation()}>
        <div className="a-modal-header">
          <h2 className="a-modal-title">Submit Your Answer:</h2>
          <h4 className="a-modal-subtitle">{props.name}: {props.question}</h4>
        </div>
        <div className="a-modal-body">
          <div className="a-text">
            <label className="a-label">
              *Your Answer:
            </label>
            <textarea className="a-textarea" maxLength={1000} onChange={aModalBodyHandler}></textarea>
            <button className="uploadBtn">upload images</button>
          </div>
          <div className="a-name">
            <label className="a-label">
              *What is your nickname?
              <input className="a-name-box" maxLength={60} onChange={aModalNameHandler} type="text" placeholder="Example: jack543!"></input>
            </label>
            <div className="warning">
                For privacy reasons, do not use your full name or email address
            </div>
          </div>
          <div>
            <label className="a-label">
              *Your email:
              <input className="a-email-box" maxLength={60} onChange={aModalEmailHandler} type="text" placeholder="Example: jack@email.com"></input>
              <div className="warning">
                  For authentication reasons you will not be emailed
              </div>
              <div className="warning">* Indicates a required field</div>
            </label>
          </div>
        </div>
        <div className="a-modal-footer">
          <div>
            {/* <button>Upload Your Photos</button> */}
          </div>
          <button className="a-button" onClick={() => submitAnswer(aModalBody, aModalName, aModalEmail, props.qId)}>Submit</button>
          {aWarning} {nWarning} {eWarning}
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;