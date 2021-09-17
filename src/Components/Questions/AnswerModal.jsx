import React, {useState, useEffect, useContext} from 'react';
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
    var validEmail = validateEmail(email);
    if (body === '') {
      alert('You must enter the following: Question');
    }
    if (name === '') {
      alert('You must enter the following: Nickname');
    }
    if (!validEmail) {
      alert('You must enter the following: A valid email address');
    }

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

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Submit Your Answer</h2>
          <h4 className="modal-subtitle">{props.name}: {props.question}</h4>
        </div>
        <div className="modal-body">
          <div>
            <div>
              <label>
                *Your Question
                <textarea onChange={aModalBodyHandler}></textarea>
              </label>
            </div>
            <div>
              <label>
                *What is your nickname
                <input onChange={aModalNameHandler} type="text" placeholder="Example: jack543!"></input>
              </label>
            </div>
            <div>
              <label>
                *Your email
                <input onChange={aModalEmailHandler} type="text" placeholder="Example: jack@email.com"></input>
                <div>
                  For authentication reasons you will not be emailed
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button>Upload Your Photos</button>
          </div>
          <button onClick={() => submitAnswer(aModalBody, aModalName, aModalEmail, props.qId)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;