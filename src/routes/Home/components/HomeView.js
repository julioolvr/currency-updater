import React from 'react'

import CurrencySelector from 'components/CurrencySelector'
import CurrencyAmount from 'components/CurrencyAmount'

const AVAILABLE_CURRENCIES = ['USD', 'GBP', 'EUR', 'ARS']
const SELECTED_CURRENCIES = ['USD', 'GBP', 'EUR']

export const HomeView = () => (
  <div>
    From:
    <ul>
      {SELECTED_CURRENCIES.map(currency => {
        return (<li key={currency}>
          <CurrencyAmount currencies={AVAILABLE_CURRENCIES}
                          currency={currency}
                          rate={Math.random()}
                          amount={Math.floor(Math.random() * 40)}>
          </CurrencyAmount>
        </li>)
      })}
    </ul>
    <div>
      To: {<CurrencySelector currencies={AVAILABLE_CURRENCIES} currency="ARS"></CurrencySelector>}, ARS1234.45
    </div>
  </div>
)

export default HomeView
