import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Text } from '../../common/Text'

const Wrapper = styled.div`
  width: 1200px;
  height: 65px;
  padding: 20px 961px 19px 31px;
  box-shadow:0px 4px 4px rgba(0, 0, 0, 0.05);
`

const LinkWrapper = styled.div`
  width: 208px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Arrow = styled.div`
  border-top: solid 5px #ef75be;
  border-right: solid 5px #ef75be;
  width: 14px;
  height: 14px;
  transform: rotate(-135deg);
`

export const Header: React.VFC = () => {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
    window.scroll(0, 0)
  }
  return (
    <Wrapper>
      <LinkWrapper onClick={backToHome}>
        <Arrow />
        <Text color="#515151" size="20px" weight="400" height="24px">
          June Yamamoto
        </Text>
      </LinkWrapper>
    </Wrapper>
  )
}
