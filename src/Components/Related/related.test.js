import React from 'react';
import {render, cleanup, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Outfits from './Outfits';
import Related from './Related';
import { ContextObj } from '../../ContextObj.jsx';

describe('Related', () => {
  afterEach(cleanup);

  const ratingAvg = 3.5;
  const productId = 40350;
  const productInfo = {
    'id': 40350,
    'campus': 'hr-rfp',
    'name': 'Blues Suede Shoes',
    'category': 'Dress Shoes',
    'default_price': '120.00',
  };

  const stylesInfo = {
    'product_id': '40350',
    'results': [
      {
        'style_id': 240531,
        'name': 'White Sole',
        'original_price': '120.00',
        'sale_price': null,
        'default?': false,
        'photos': [
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          }
        ],
      },
    ]
  };

  const relatedItems =
  [
    40344,
    40345,
    40346
  ];

  const renderRelated = () => {
    render(
      <ContextObj.Provider value={{ productId, productInfo, stylesInfo, ratingAvg }}>
        <Related />
        <Outfits />
      </ContextObj.Provider>);
  };



  test('Does outfits render add outfit', () => {
    renderRelated();
    const addOutfitTest = screen.getByText(/ADD OUTFIT/i);

    expect(addOutfitTest).toBeInTheDocument();
  });

  test('Does create product card', () => {
    renderRelated();
    // await screen.findByText(/stars/i);
    // expect(screen.getByText(/Camo Onesie/)).toBeInTheDocument();

    waitFor(() =>
      screen.findByText(/stars/i)
    )
      .then( (result) => {
        expect(screen.getByText(/Camo Onesie/)).toBeInTheDocument();
      })
      .catch( (err) => {
        console.log(err);
      });
  });
});
