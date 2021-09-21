import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from '../../ContextObj';
import QAList from './QAList.jsx';

const QuestionSearch = (props) => {
  const [filteredList, setFilteredList] = useState(props.questions.results);
  const [query, setQuery] = useState('');

  const searchHandler = (array) => {
    var search = event.target.value;
    setQuery(search);
  };

  const filterQuestions = (array) => {
    var result = [];
    if (query.length >= 3) {
      for (var i = 0; i < array.length; i++) {
        var body = array[i].question_body.toLowerCase();
        var smallQuery = query.toLowerCase();
        if (body.indexOf(smallQuery) > -1) {
          result.push(array[i]);
        }
      }
      return result;
    } else {
      return array;
    }
  };

  return (
    <div className="searchGrid">
      <input className="search-text-box" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={searchHandler}></input>
      <QAList addQuestion={props.addQuestion} questions={filterQuestions(props.questions.results)}/>
    </div>
  );
};

export default QuestionSearch;