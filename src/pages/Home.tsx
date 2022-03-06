import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/home/header/Header'
import { Works } from '../components/home/works/Works'
import { Introduce } from '../components/home/introduce/Introduce'
import Activity from '../components/home/activity/Activity'
import Social from '../components/home/social/Social'

const Wrapper = styled.div`
  width: 1200px;
  height: 3412px;
  margin: 0 auto;
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
