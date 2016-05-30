import React from 'react'

const AVAILABLE_CURRENCIES = ['USD', 'GBP', 'EUR', 'ARS']

function buildCurrenciesOptions(currencies) {
  return currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)
}

export const HomeView = () => (
  <div>
    From:
    <ul>
      <li>
        <select value="USD">
          {buildCurrenciesOptions(AVAILABLE_CURRENCIES)}
        </select>
        <input type="number"></input>
        <input type="number"></input>
      </li>
      <li>
        <select value="GBP">
          {buildCurrenciesOptions(AVAILABLE_CURRENCIES)}
        </select>
        <input type="number"></input>
        <input type="number"></input>
      </li>
      <li>
        <select value="EUR">
          {buildCurrenciesOptions(AVAILABLE_CURRENCIES)}
        </select>
        <input type="number"></input>
        <input type="number"></input>
      </li>
    </ul>
    <div>
      To: ARS, ARS1234.45
    </div>
  </div>
)

export default HomeView
