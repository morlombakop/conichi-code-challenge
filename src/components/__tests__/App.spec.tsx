import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import App from '../App'

afterAll(cleanup)

test('App initialize with Loader component', () => {
  const wrap = render(<App />)
  expect(wrap.getByTestId('loader')).toBeInstanceOf(HTMLDivElement)
})