import * as React from 'react'

const Loader: React.FC = () => (
  <div data-testid="loader" className="loader-container">
    <div className="loader">
      <div className="spinner" />
    </div>
  </div>
)

export default Loader
