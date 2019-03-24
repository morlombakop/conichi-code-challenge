import * as React from 'react'
import { render } from 'react-testing-library'

import App from '../App'

test('App initialize with Loader component', () => {
  const wrap = render(<App />)
  expect(wrap.getByTestId('loader')).toBeDefined()
})

test
