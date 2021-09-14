import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import QAList from './QAList.jsx';
import './styles.css';
import {ContextObj} from '../../ContextObj';

const Questions = (props) => {
  const {productInfo, getServer} = useContext(ContextObj);
  const [questions, setQuestions] = useState({results: []});
  const id = productInfo.id;

  useEffect(() => {
    getServer(`/qa/questions?product_id=40351`, (result) => setQuestions(result));
  }, [productInfo]);

  return (
    <div className='questions'>
      <QAList questions={questions}/>
    </div>
  );
};

export default Questions;

