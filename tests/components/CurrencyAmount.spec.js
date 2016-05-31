import React from 'react'
import { shallow } from 'enzyme'

import CurrencyAmount from 'components/CurrencyAmount/CurrencyAmount'

describe('(Component) CurrencyAmount', () => {
  let _wrapper, _props

  beforeEach(() => {
    _props = {
      currencies: ['ARS', 'EUR'],
      currency: 'ARS',
      rate: 0.5,
      amount: 10
    }

    _wrapper = shallow(<CurrencyAmount {..._props}/>)
  })

  it('renders a <CurrencySelector>', () => {
    expect(_wrapper).to.have.descendants('CurrencySelector')
  })

  it('renders an input with the given rate', () => {
    expect(_wrapper.find('input').at(0)).to.have.value(_props.rate.toString())
  })

  it('renders an input with the given value', () => {
    expect(_wrapper.find('input').at(1)).to.have.value(_props.amount.toString())
  })
})
