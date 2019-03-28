import * as React from 'react'
import { render, waitForElement, cleanup } from 'react-testing-library'
import Footer from '../Footer'

afterAll(cleanup)

describe('Footer component', () => {
  const copyright = 'foo bar'
  const { getByTestId, getByText } = render(<Footer copyright={copyright} />)

  test('Footer renders properly', () => {
    expect(getByTestId('footer')).toBeInstanceOf(HTMLElement)
  })

  test('Footer renders custom copyright', async () => {
    const element = await waitForElement(() => getByText(copyright))
    expect(element).toBeInstanceOf(HTMLDivElement)
    expect(element.classList.contains('copyright')).toBe(true)
  })
})
