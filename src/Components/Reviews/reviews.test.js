import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from '../../App.jsx';
import Details from '../Details/Details.jsx';

describe('Details', () => {
  test('renders Details component', () => {
    render(<Details />);
    const text = screen.getByText(/details/i);
    expect(text).toBeInTheDocument();
  });
});
