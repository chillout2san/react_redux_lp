import React from 'react'
import styled from 'styled-components'
import Header from '../components/home/Header'
import Works from '../components/home/Works'
import Introduce from '../components/home/Introduce'
import Activity from '../components/home/Activity'
import Social from '../components/home/Social'

const Wrapper = styled.div`
  width: 1200px;
  height: 3412px;
  margin: 0 auto;
  background: black;
`

const Home: React.VFC = () => {
  return (
    <Wrapper>
      <Header />
      <Works />
      <Introduce />
      <Activity />
      <Social />
    </Wrapper>
  )
}

export default Home
