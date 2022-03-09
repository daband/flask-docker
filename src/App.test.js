import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const linkElement = getByText(/Hello ThangReactJS/i);
  expect(linkElement).toBeInTheDocument();
});