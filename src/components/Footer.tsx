import * as React from 'react'
import { FaConciergeBell } from 'react-icons/fa'

export interface IFooterProps {
  copyright: string
}

// Using PureComponent instead of Functional Component to prevent unnecessarily re-rendering.
class Footer extends React.PureComponent<IFooterProps> {
  render() {
    return (
      <footer data-testid="footer">
        <div className="flex p25 text-dg">
          <h3 className="flex-1">&ccedil;onichi</h3>
          <h3>
            <FaConciergeBell /> SMARTHOTEL
          </h3>
        </div>
        <div className="copyright pt10 pb10">{this.props.copyright}</div>
      </footer>
    )
  }
}

export default Footer
