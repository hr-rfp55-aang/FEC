import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from './Details';
import ProductDescription from './ProductDescription';
import jest from 'jest';
import '@babel/plugin-syntax-jsx';
import axios from 'axios';


// Test for text appearing in a component:

test('product description component loads', () => {
  render(<ProductDescription/>);
  const text = screen.getByText(/Read all 100 reviews/i);
  expect(text).toBeInTheDocument();
});

// describe('Details', () => {
//   it('should render a div', () => {
//     render (<ProductDescription />);

//     const text = screen.getByText(/Read all 100 reviews/i);

//     expect(text).toBeInTheDocument();
//   });
// });


// Test get request:

// const server = 'http://localhost:3001';

// test('get request', () => {
//   axios.get(server + '/products/40350')
//     .then((result) => {
//       callback(result.data);
//     })
//     .catch((err) => {
//       console.log('axios err', err);
//     });

//   const statusCode = result.statuscode;

//   expect(statusCode).toBeInTheDocument;
// });