import React from 'react'
import styled from 'styled-components'
import img from './notebook.svg'
import ProfilePicture from './parts/ProfilePicture'

const Wrapper = styled.div`
  width: 1200px;
  height: 430px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center bottom;
`

const Header: React.VFC = () => {
  return (
    <Wrapper>
      <ProfilePicture />
    </Wrapper>
  )
}

export default Header
