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

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Ask Your Question </span>
          <span className="modal-subtitle"> about the {props.name}</span>
        </div>
        <div className="modal-body">
          <div>
            <div>
              <label >
                * Your Question
              </label>
              <textarea className="modal-text" maxLength={1000} onChange={qModalBodyHandler}></textarea>

            </div>
            <div>
              <label>
                * What is your nickname
                <input className="modal-text" maxLength={60} onChange={qModalNameHandler} type="text" placeholder="Example: jackson11!"></input>
              </label>
              <div className="warning">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <label>
                * Your email
                <input className="modal-text email-text-box" maxLength={60} onChange={qModalEmailHandler} type="text" placeholder="Why did you like the product or not?"></input>
              </label>
              <div className="warning">
                  For authentication reasons you will not be emailed
              </div>
              <div className="warning">* Indicates a required field</div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={() => submitQuestion(qModalBody, qModalName, qModalEmail, props.productId)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;