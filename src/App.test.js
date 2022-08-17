import React from 'react'
import App from './App'
/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
import {render, screen} from '@testing-library/react'

test('has correct welcome text', () => {
  render(<App  />)
  expect(screen.getByRole('heading')).toHaveTextContent('Music Website')
})