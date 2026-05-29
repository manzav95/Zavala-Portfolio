import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-tsparticles', () => () => <div data-testid='particles' />);

test('renders portfolio hero content', () => {
  const { getByText } = render(<App />);
  const heroText = getByText(/I build polished web products/i);
  expect(heroText).toBeTruthy();
});
