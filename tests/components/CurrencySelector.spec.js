import React from 'react'
import { shallow } from 'enzyme'

import CurrencySelector from 'components/CurrencySelector/CurrencySelector'

describe('(Component) CurrencySelector', () => {
  let _wrapper, _props

  beforeEach(() => {
    _props = {
      currencies: ['ARS', 'EUR'],
      currency: 'ARS'
    }

    _wrapper = shallow(<CurrencySelector {..._props}/>)
  })

  it('renders a <select> with the given currencies.', () => {
    expect(_wrapper.find('option').map(option => option.text())).to.eql(_props.currencies)
  })

  it('renders a <select> whose value is the given currency.', () => {
    // Render the element because chai-enzime doesn't support checking a select element value yet
    expect(_wrapper.render().find('select').val()).to.equal(_props.currency)
  })
})
