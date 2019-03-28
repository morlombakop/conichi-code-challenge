import * as React from 'react'
import { FaBars } from 'react-icons/fa'
import { FlagIcon } from 'react-flag-kit'

export interface IHeaderProps {
  title: string
}

class Header extends React.PureComponent<IHeaderProps> {
  render() {
    return (
      <nav className="mb10 flex" data-testid="header">
        <button className="btn-icon" title="Menu" type="button">
          <FaBars opacity="0.7" />
        </button>
        <h3 className="flex-1 text-center">{this.props.title}</h3>
        <FlagIcon code="GB" size={24} />
      </nav>
    )
  }
}

export default Header
