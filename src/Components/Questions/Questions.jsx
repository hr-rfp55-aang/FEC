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


  useEffect(() => {
    getServer(`/qa/questions?product_id=${productId}`)
      .then((result) => setQuestions(result))
      .catch((error) => console.log('questions get product id', error));
  }, [productId]);



  return (
    <div className='questions'>
      <div>Questions & Answers</div>
      <QuestionSearch />
      <QAList questions={questions}/>
      <div>
        <button onClick={() => setShowQuestions(true)}>Add A Question</button>
        <QuestionModal onClose={() => setShowQuestions(false)} show={showQuestions} name={productInfo.name}/>
      </div>
    </div>
  );
};

export default Questions;

