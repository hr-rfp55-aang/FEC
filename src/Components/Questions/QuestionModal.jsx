import React, {useState} from 'react';

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

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Ask Your Question</h2>
          <h4 className="modal-subtitle">About the {props.name}</h4>
        </div>
        <div className="modal-body">
          <div>
            <div>
              <label>
                *Your Question
                <textarea onChange={qModalBodyHandler}></textarea>
              </label>
            </div>
            <div>
              <label>
                *What is your nickname
                <input onChange={qModalNameHandler} type="text" placeholder="Example: jackson11!"></input>
              </label>
              <div>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <label>
                *Your email
                <input type="text" placeholder="Why did you like the product or not?"></input>
                <div>
                  For authentication reasons you will not be emailed
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;