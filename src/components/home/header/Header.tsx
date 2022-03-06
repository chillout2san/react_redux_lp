import React from 'react'
import styled from 'styled-components'
import img from './notebook.svg'
import { ProfileCard } from './parts/ProfileCard'
import { ProfileText } from './parts/ProfileText'

const Wrapper = styled.div`
  width: 1200px;
  height: 430px;
  padding: 74px 147px 80px 93px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  justify-content: space-between;
`

export const Header: React.VFC = () => {
  return (
    <Wrapper>
      <ProfileCard />
      <ProfileText />
    </Wrapper>
  )
}
