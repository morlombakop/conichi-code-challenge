export interface IAddressCard {
  type: string
  label: string
  address: IAddress
}

export interface IAddress {
  street: string
  postal_code: string
  separator: string
  city: string
  country: string
}

export interface IGlobal extends IAction {
  title: string
  copyright: string
}

export interface IAction {
  back: string
  submit: string
}

export interface IAddNewAddress {
  heading: string
  description: string
}

export interface IPageComponent {
  add_new_address: IAddNewAddress
}

export interface IContent {
  heading: string
  description: string
  components: IPageComponent
}

export interface IBillingAddressPage {
  content: IContent
  global: IGlobal
}
