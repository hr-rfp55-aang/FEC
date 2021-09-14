import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QAList from './QAList.jsx'

const Questions = (props) => {

  const [questions, setQuestions] = useState({results: []});

  useEffect(() => {
    axios.get('http://localhost:3001/qa/questions?product_id=40344')
    .then((qs) => {
      setQuestions(qs.data)
    })
    .catch((error) => {
      console.log('get questions error', error)
    });
  }, [])


  return (
    <div >
      <QAList questions={questions}/>
    </div>
  )
}


export default Questions;

