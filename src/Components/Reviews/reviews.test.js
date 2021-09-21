import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContextObj } from '../../ContextObj.jsx';
import App from '../../App.jsx';
import Reviews from '../Reviews/Reviews.jsx';

describe('Details', () => {
  afterEach(cleanup);

  const ratingAvg = 3.5;
  const reviewsTotal = 11;
  const productId = 40350;
  const reviewMetaObj = {
    'product_id': '2',
    'ratings': {
      1: 2,
      2: 1,
      3: 1,
      4: 2,
      5: 4
    },
    'recommended': {
      true: 5

    },
    'characteristics': {
      'Size': {
        'id': 14,
        'value': '4.0000'
      },
      'Width': {
        'id': 15,
        'value': '3.5000'
      },
      'Comfort': {
        'id': 16,
        'value': '4.0000'
      }
    }
  };

  test('renders Reviews component', () => {
    const { getByText } = render(
      <ContextObj.Provider value={{ productId, ratingAvg, reviewsTotal, reviewMetaObj }}>
        <Reviews />
      </ContextObj.Provider>);

    expect(getByText(/Ratings & Reviews/i)).toBeInTheDocument();
  });
});
