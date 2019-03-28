import * as React from 'react'
import { render, waitForElement, cleanup } from 'react-testing-library'
import Header from '../Header'

afterAll(cleanup)

describe('Header component', () => {
  const title = 'Hello world'
  const { getByTestId, getByText } = render(<Header title={title} />)

  test('Header renders properly', () => {
    expect(getByTestId('header')).toBeInstanceOf(HTMLElement)
  })

  test('Header renders custom title', async () => {
    const element = await waitForElement(() => getByText(title))
    expect(element).toBeInstanceOf(HTMLHeadingElement)
    
    // Style testing could done better with jest-dom https://github.com/gnapse/jest-dom#tohavestyle
    expect(element.classList.contains('text-center')).toBe(true)
    expect(element.classList.contains('flex-1')).toBe(true)
  })
})
