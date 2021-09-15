import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import QAList from './QAList.jsx';
import './styles.css';
import {ContextObj} from '../../ContextObj';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionModal from './QuestionModal.jsx';

const Questions = (props) => {
  const {productInfo, getServer} = useContext(ContextObj);
  const [questions, setQuestions] = useState({results: []});
  const id = productInfo.id;

  useEffect(() => {
    getServer(`/qa/questions?product_id=${id}`, (result) => setQuestions(result));
  }, [productInfo]);

  return (
    <div className='questions'>
      <div>Questions & Answers</div>
      <QuestionSearch />
      <QAList questions={questions}/>
      <div>
        <button>Add A Question</button>
        <QuestionModal name={productInfo.name}/>
      </div>
    </div>
  );
};

export default Questions;

