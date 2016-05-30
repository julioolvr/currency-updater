import React from 'react'

const AVAILABLE_CURRENCIES = ['USD', 'GBP', 'EUR', 'ARS']
const SELECTED_CURRENCIES = ['USD', 'GBP', 'EUR']

function buildCurrencySelector(currency) {
  return (<select value={currency}>
    {buildCurrenciesOptions(AVAILABLE_CURRENCIES)}
  </select>)
}

function buildCurrencyList(selectedCurrencies) {
  return selectedCurrencies.map(currency => {
    return (<li key={currency}>
      {buildCurrencySelector(currency)}
      <input type="number"></input>
      <input type="number"></input>
    </li>)
  })
}

function buildCurrenciesOptions(currencies) {
  return currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)
}

export const HomeView = () => (
  <div>
    From:
    <ul>
      {buildCurrencyList(SELECTED_CURRENCIES)}
    </ul>
    <div>
      To: {buildCurrencySelector('ARS')}, ARS1234.45
    </div>
  </div>
)

export default HomeView
