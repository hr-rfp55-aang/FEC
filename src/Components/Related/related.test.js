import React from 'react';
import {render, cleanup, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Related from './Related';

describe('Related', () => {
  afterEach(cleanup);


  it('check first related item', () => {
    render(<Related />);
    const firstRelated = screen.getByText('40344');

    expect(firstRelated).toBeInTheDocument();

  });


});
