import * as React from 'react'
import { FaPen, FaCheck } from 'react-icons/fa'
import { IAddressCard } from '../types'

export interface IAddressCardProps extends IAddressCard {
  isSelected: boolean
}

// Using PureComponent instead of Functional Component to prevent unnecessarily re-rendering.
class AddressCard extends React.PureComponent<IAddressCardProps> {
  getStyles = (): string => {
    const { isSelected } = this.props
    return isSelected
      ? 'card card-primary flex flex-column'
      : 'card card-default flex flex-column'
  }

  render() {
    const { city, country, separator, street, postal_code } = this.props.address
    return (
      <div data-testid="address-card" className={this.getStyles()}>
        <div className="flex flex-column flex-1">
          <h3>{this.props.label}</h3>
        </div>
        <div className="flex end">
          <div className="flex flex-column flex-1">
            <span>{street}</span>
            <span>{`${postal_code} ${separator} ${city}`}</span>
            <span>{country}</span>
          </div>
          <button
            className="btn-icon mr15 mt25"
            title="Edit billing address"
            type="button"
          >
            <FaPen size="20" />
          </button>
        </div>
        {this.props.isSelected && (
          <div className="card-selected">
            <FaCheck size="12" />
          </div>
        )}
      </div>
    )
  }
}

export default AddressCard
