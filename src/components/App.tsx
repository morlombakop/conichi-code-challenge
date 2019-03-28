import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import BillingAddress from './BillingAddress'
import Loader from './Loader'
import { IAddressCard, IBillingAddressPage } from '../types'
import fetchAppData from '../services/WebApi'

type AppState = {
  isLoading: boolean
  addresses: IAddressCard[]
  pageSetting: IBillingAddressPage
}

class App extends React.Component<{}> {
  readonly state: AppState = {
    isLoading: true,
    addresses: [],
    pageSetting: {
      content: {
        heading: '',
        description: '',
        components: {
          add_new_address: {
            heading: '',
            description: '',
          },
        },
      },
      global: {
        title: '',
        back: '',
        submit: '',
        copyright: '',
      },
    },
  }

  componentDidMount() {
    fetchAppData().then(data =>
      this.setState(
        () => ({
          isLoading: false,
          pageSetting: data[0],
          addresses: data[1],
        }))
    )
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />
    }
    return (
      <div className="app" data-testid="app-container">
        <Header title={this.state.pageSetting.global.title} />
        <BillingAddress
          addresses={this.state.addresses}
          content={this.state.pageSetting.content}
          submit={this.state.pageSetting.global.submit}
          back={this.state.pageSetting.global.back}
        />
        <Footer copyright={this.state.pageSetting.global.copyright} />
      </div>
    )
  }
}

export default App
