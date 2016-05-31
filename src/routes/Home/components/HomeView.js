import React from 'react'

import CurrencySelector from 'components/CurrencySelector'

const AVAILABLE_CURRENCIES = ['USD', 'GBP', 'EUR', 'ARS']
const SELECTED_CURRENCIES = ['USD', 'GBP', 'EUR']

function buildCurrencyList(selectedCurrencies) {
  return selectedCurrencies.map(currency => {
    return (<li key={currency}>
      <CurrencySelector currencies={AVAILABLE_CURRENCIES} currency={currency}></CurrencySelector>
      <input type="number"></input>
      <input type="number"></input>
    </li>)
  })
}

export const HomeView = () => (
  <div>
    From:
    <ul>
      {buildCurrencyList(SELECTED_CURRENCIES)}
    </ul>
    <div>
      To: {<CurrencySelector currencies={AVAILABLE_CURRENCIES} currency="ARS"></CurrencySelector>}, ARS1234.45
    </div>
  </div>
)

export default HomeView
