import React, {useState, useEffect, useContext} from 'react';

const AnswerModal = (props) => {

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
                <textarea></textarea>
              </label>
            </div>
            <div>
              <label>
                *What is your nickname
                <input type="text" placeholder="Example: jack543!"></input>
              </label>
            </div>
            <div>
              <label>
                *Your email
                <input type="text" placeholder="Example: jack@email.com"></input>
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
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;