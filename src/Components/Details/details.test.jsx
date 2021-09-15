import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import details from './Details.jsx';
import jest from 'jest';
// We need install msw and create a mock server for testing
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';

describe('details', () => {
  test('product description component loads', () => {
    render(<Details />);
    expect(details).toBe(true);
  });
  // test('handles server error', () => {
  //   server.use(
  //     rest.get('/greeting', (req, res, ctx) => {
  //       return res(ctx.status(500))
  //     }),
  //   )
});
