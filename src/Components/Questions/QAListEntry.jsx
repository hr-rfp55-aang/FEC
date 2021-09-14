import React, {useState, useEffect} from 'react';

const QAListEntry = (props) => {
  return (
    <div>
      <div>Q: {props.question.question_body}</div>
      <div>A: {props.question.answers.body}</div>
    </div>
  )
}

export default QAListEntry;