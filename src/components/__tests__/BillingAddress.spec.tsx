import * as React from 'react'
import { render, waitForElement, cleanup } from 'react-testing-library'
import * as faker from 'faker'
import BillingAddress, { IBillingAddressProps } from '../BillingAddress'
import { IAddressCard } from '../../types';

afterAll(cleanup)

describe('Billing Address component', () => {
  const type = faker.random.word()
  const mockAddress = (): IAddressCard => ({
    type,
    label: faker.random.word(),
    address: {
      street: faker.address.streetName(),
      postal_code: faker.address.zipCode(),
      separator: '-',
      city: faker.address.city(),
      country: faker.address.country()
    }
  })

  const mockProps: IBillingAddressProps = {
    back: faker.lorem.word(),
    submit: faker.lorem.word(),
    content: {
      heading: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      components: {
        add_new_address: {
          heading: faker.lorem.words(),
          description: faker.lorem.paragraph(),
        }
      }
    },
    addresses: [mockAddress(), mockAddress()]
  }

  const { getByTestId, getByText } = render(<BillingAddress {...mockProps} />)
  const billingAddress = getByTestId('billing-address');

  test('Address card component renders properly', () => {
    expect(billingAddress).toBeInstanceOf(HTMLElement)
    expect(billingAddress.getElementsByClassName('card').length).toBe(3)
    expect(billingAddress.getElementsByClassName('card-primary').length).toBe(1)
    expect(billingAddress.getElementsByClassName('card-default').length).toBe(1)
  })

  test('Back and submit buttons are rendered', async() => {
    const submitEl = await waitForElement(() => getByText(mockProps.submit))
    expect(submitEl).toBeInstanceOf(HTMLButtonElement)
    expect(submitEl.classList.contains('btn-primary')).toBe(true)

    const backEl = await waitForElement(() => getByText(mockProps.back))
    expect(submitEl).toBeInstanceOf(HTMLButtonElement)
    expect(backEl.classList.contains('btn-default')).toBe(true)
  })

  test('Add new address card is rendered properly', () => {
    const addNewAddressCard = billingAddress.getElementsByClassName('card-dark')[0];
    
    expect(addNewAddressCard).toBeInstanceOf(HTMLDivElement);
    expect(addNewAddressCard.getElementsByTagName('h3')[0].textContent)
      .toEqual(mockProps.content.components.add_new_address.heading)
    expect(addNewAddressCard.getElementsByTagName('h5')[0].textContent)
      .toEqual(mockProps.content.components.add_new_address.description)
    expect(addNewAddressCard.getElementsByTagName('button')[0]).toBeDefined()
  })
})