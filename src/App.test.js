import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  const { getByText } = render(<App />);
  const heroText = getByText(/I build polished web products/i);
  expect(heroText).toBeInTheDocument();
});
