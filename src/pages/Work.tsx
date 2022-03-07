import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/work/header/Header'

const Wrapper = styled.div`
  width: 1200px;
  height: 2010px;
  margin: 0 auto;
`

const Work: React.VFC = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default Work
