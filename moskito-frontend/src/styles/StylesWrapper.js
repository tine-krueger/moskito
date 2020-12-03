import React from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'

export default function StyleWrapper({ children }) {
  return (
    <Wrapper>
      <GlobalStyles/>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //background-color: #e3e3e3;
`