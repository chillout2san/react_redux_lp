import React from 'react'
import styled from 'styled-components'
import FaceBook from './parts/facebook.svg'
import Instagram from './parts/instagram.svg'
import Twitter from './parts/twitter.svg'

const Wrapper = styled.div`
  width: 1200px;
  height: 280px;
  background: #f7f7f7;
  padding: 120px 510px;
`

const IconWrapper = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`

interface IconProps {
  url: string
}

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props: IconProps) => props.url});
`

const Social: React.VFC = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon url={FaceBook} />
        <Icon url={Instagram} />
        <Icon url={Twitter} />
      </IconWrapper>
    </Wrapper>
  )
}

export default Social
