import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContextObj } from '../../ContextObj.jsx';
import Questions from '../Questions/Questions.jsx';
import AnswerEntry from '../Questions/AnswerEntry.jsx';

describe('Details', () => {
  afterEach(cleanup);

  const productId = 40350;

  const productInfo = {
    "id": 40350,
    "campus": "hr-rfp",
    "name": "Blues Suede Shoes",
    "slogan": "2019 Stanley Cup Limited Edition",
    "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
    "category": "Dress Shoes",
    "default_price": "120.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z",
    "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      },
      {
        "feature": "Stitching",
        "value": "Double Stitch"
      }
    ]
  };

  const answers = {
    "question": "329029",
    "page": 1,
    "count": 5,
    "results": [
      {
        "answer_id": 3073798,
        "body": "Its the best! Seriously magic fabric",
        "date": "2019-09-18T00:00:00.000Z",
        "answerer_name": "warmkid",
        "helpfulness": 5,
        "photos": []
      },
      {
        "answer_id": 3073799,
        "body": "Supposedly suede, but I think its synthetic",
        "date": "2019-09-18T00:00:00.000Z",
        "answerer_name": "warmkid",
        "helpfulness": 4,
        "photos": []
      },
      {
        "answer_id": 3073786,
        "body": "Suede",
        "date": "2019-09-18T00:00:00.000Z",
        "answerer_name": "warmkid",
        "helpfulness": 4,
        "photos": [
          {
            "id": 2723828,
            "url": "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80"
          }
        ]
      },
      {
        "answer_id": 3989688,
        "body": "try",
        "date": "2021-09-17T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 2,
        "photos": []
      },
      {
        "answer_id": 3989725,
        "body": "haha",
        "date": "2021-09-18T00:00:00.000Z",
        "answerer_name": "no of  your business",
        "helpfulness": 0,
        "photos": []
      }
    ]
  };


  test('renders Questions component', () => {
    const { getByText } = render(
      <ContextObj.Provider value={{ productId, productInfo }}>
        <Questions />
      </ContextObj.Provider>);

    expect(getByText(/Questions & Answers/i)).toBeInTheDocument();
  });

  test('renders AnswerEntry component', () => {
    const { getByText } = render(
      <ContextObj.Provider value={{ productId, productInfo, answers }}>
        <AnswerEntry answer={answers.results[0]}/>
      </ContextObj.Provider>);

    expect(getByText(/Helpful/i)).toBeInTheDocument();
  });

});