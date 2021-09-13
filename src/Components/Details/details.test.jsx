import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import details from './Details.jsx'


test('product description component loads', () => {
  expect(details).toBe(true);
});
