import axios from 'axios'
import ApiEndpoints from '../config/ApiEndpoints'
import { IBillingAddressPage, IAddressCard } from '../types'

const fetchPageContent = () =>
  axios.get(ApiEndpoints.pageContent).then(res => res.data)

const fetchBillingAddress = () =>
  axios.get(ApiEndpoints.billingAddress).then(res => res.data.data)

const fetchAppData = () =>
  Promise.all<IBillingAddressPage, [IAddressCard]>([
    fetchPageContent(),
    fetchBillingAddress(),
  ])

export default fetchAppData
