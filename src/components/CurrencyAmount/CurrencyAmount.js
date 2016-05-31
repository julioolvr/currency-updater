import React from 'react'

import CurrencySelector from 'components/CurrencySelector'

export const CurrencyAmount = ({ currency, currencies, rate, amount }) => {
  return (
    <div>
      <CurrencySelector currencies={currencies} currency={currency}></CurrencySelector>
      <input type="number" value={rate}></input>
      <input type="number" value={amount}></input>
    </div>
  )
}

export default CurrencyAmount
