import * as React from 'react'
import { FaPlus } from 'react-icons/fa'
import AddressCard from './AddressCard'
import { IContent, IAction, IAddressCard } from '../types'

export interface IBillingAddressProps extends IAction {
  content: IContent
  addresses: IAddressCard[]
}

// Using PureComponent instead of Functional Component to prevent unnecessarily re-rendering.
class BillingAddress extends React.PureComponent<IBillingAddressProps> {
  renderActions = (): JSX.Element => (
    <div className="flex">
      <button className="btn-default">{this.props.back}</button>
      <span className="flex-1" />
      <button className="btn-primary">{this.props.submit}</button>
    </div>
  )

  renderAddNewAddress = (): JSX.Element => {
    const {
      description,
      heading,
    } = this.props.content.components.add_new_address

    return (
      <div className="card card-dark flex-column flex center">
        <div className="flex">
          <div className="flex flex-column flex-1 text-upper">
            <h3>{heading}</h3>
            <h5 className="font-normal">{description}</h5>
          </div>
          <button
            className="btn-icon icon-white mr15"
            title="Add new billing address"
            type="button"
          >
            <FaPlus size="24" opacity="0.7" />
          </button>
        </div>
      </div>
    )
  }

  renderAddresses = (): JSX.Element => (
    <React.Fragment>
      {this.props.addresses.map((card, index) => (
        <AddressCard
          key={`${index}-${card.address.postal_code}`}
          isSelected={index === 0}
          {...card}
        />
      ))}
    </React.Fragment>
  )

  render() {
    const { description, heading } = this.props.content
    return (
      <div className="flex center" data-testid="billing-address">
        <div className="w-800 pl10 pr10">
          <h2 className="text-upper text-center pt25 pb25">{heading}</h2>
          <p className="text-center pb25">{description}</p>
          {this.renderAddresses()}
          {this.renderAddNewAddress()}
          <hr />
          {this.renderActions()}
        </div>
      </div>
    )
  }
}

export default BillingAddress
