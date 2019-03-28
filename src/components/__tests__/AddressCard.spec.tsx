import * as React from 'react'
import { render, waitForElement, cleanup } from 'react-testing-library'
import * as faker from 'faker'
import AddressCard from '../AddressCard'
import { IAddress } from '../../types';

afterAll(cleanup)

describe('Address card component', () => {
  let isSelected: boolean = false
  const type = faker.lorem.word()
  const label = faker.lorem.words()
  const address: IAddress = {
    street: faker.address.streetName(),
    postal_code: faker.address.zipCode(),
    separator: '-',
    city: faker.address.city(),
    country: faker.address.country()
  }

  const { getByTestId, getByText, rerender } = render(
    <AddressCard
      address={address}
      isSelected={isSelected}
      type={type}
      label={label} />
  )

  const addressCard = getByTestId('address-card');

  test('Address card component renders properly', () => {
    expect(addressCard).toBeInstanceOf(HTMLElement)
    expect(addressCard.childElementCount).toEqual(2)
  })

  test('Address card component has proper styling classes', () => {
    expect(addressCard.classList.length).toEqual(4)
    expect(addressCard.classList.contains('card-default')).toBe(true)
    expect(addressCard.classList.contains('card')).toBe(true)
    expect(addressCard.classList.contains('card-primary')).toBe(false)
    expect(addressCard.classList.contains('flex')).toBe(true)
    expect(addressCard.classList.contains('flex-column')).toBe(true)
  })

  test('Address card component renders props properly', async() => {
    const labelEl = await waitForElement(() => getByText(label))
    expect(labelEl).toBeInstanceOf(HTMLHeadingElement)

    const streetEl = await waitForElement(() => getByText(address.street))
    expect(streetEl).toBeInstanceOf(HTMLSpanElement)

    const countryEl = await waitForElement(() => getByText(address.country))
    expect(countryEl).toBeInstanceOf(HTMLSpanElement)

    const postalCity = `${address.postal_code} ${address.separator} ${address.city}`
    const cityEl = await waitForElement(() => getByText(postalCity))
    expect(cityEl).toBeInstanceOf(HTMLSpanElement)
  })

  test('Selected Address card component renders tick icon', () => {
    isSelected = true;
    rerender(
      <AddressCard
        address={address}
        isSelected={true}
        type={type}
        label={label} />
    )

    expect(addressCard.classList.length).toEqual(4)
    expect(addressCard.classList.contains('card-primary')).toBe(true)
    expect(addressCard.classList.contains('card-default')).toBe(false)
    expect(addressCard.childElementCount).toEqual(3)
  })
})
