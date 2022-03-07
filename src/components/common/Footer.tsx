import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  margin: 0 auto;
  width: 1200px;
  height: 64px;
  background: #515151;
  position: relative;
`

const Circle = styled.div`
  padding-top: 8px;
  width: 64px;
  height: 64px;
  background: #ef75be;
  border-radius: 50%;
  position: absolute;
  top: -32px;
  left: 1083px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Arrow = styled.div`
  border-top: solid 7px #ffffff;
  border-right: solid 7px #ffffff;
  width: 16px;
  height: 16px;
  transform: rotate(-45deg);
`

export const Footer: React.VFC = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <FooterWrapper>
      <Circle onClick={scrollUp}>
        <Arrow />
      </Circle>
    </FooterWrapper>
  )
}
