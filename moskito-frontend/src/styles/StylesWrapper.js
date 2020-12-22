import React from 'react'
import GlobalStyles from './GlobalStyles'

export default function StyleWrapper({ children }) {
  return (
    <div>
      <GlobalStyles/>
      {children}
    </div>
  )
}

