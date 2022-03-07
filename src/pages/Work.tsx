import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/work/header/Header'
import { Works } from '../components/work/works/Works'
import { Links } from '../components/work/links/Links'

const Wrapper = styled.div`
  width: 1200px;
  height: 2010px;
  margin: 0 auto;
`

const Work: React.VFC = () => {
  return (
    <Wrapper>
      <Header />
      <Works />
      <Links />
    </Wrapper>
  )
}

export default Work
