import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import QAList from './QAList.jsx';
import './styles.css';
import {ContextObj} from '../../ContextObj';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionModal from './QuestionModal.jsx';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const Questions = (props) => {
  const {productInfo, productId} = useContext(ContextObj);
  const [questions, setQuestions] = useState({results: []});
  const [showQuestions, setShowQuestions] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');


  useEffect(() => {
    getServer(`/qa/questions?product_id=${productId}&count=100`)
      .then((result) => setQuestions(result))
      .catch((error) => console.log('questions get product id', error));
  }, [productId, newQuestion]);



  return (
    <div className='questions'>
      <div>Questions & Answers</div>
      <QuestionSearch questions={questions}/>
      <div>
        <button onClick={() => setShowQuestions(true)}>Add A Question</button>
        <QuestionModal setNewQuestion={setNewQuestion} onClose={() => setShowQuestions(false)} show={showQuestions} name={productInfo.name} productId={productId}/>
      </div>
    </div>
  );
};

export default Questions;

