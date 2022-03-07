import React from 'react'
import styled from 'styled-components'
import { PictureCard } from '../../common/PictureCard'
import FirstLP from './parts/firstlp.svg'
import SecondLP from './parts/secondlp.svg'

const Wrapper = styled.div`
  width: 1200px;
  height: 661px;
  padding: 119px 309px 121px 309px;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
`

export const Links: React.VFC = () => {
  return (
    <Wrapper>
      <PictureCard
        path={FirstLP}
        header="Musubu"
        paragraph="Coding/ React + Redux"
      />
      <PictureCard
        path={SecondLP}
        header="Musubu"
        paragraph="Coding/ React + Redux"
      />
    </Wrapper>
  )
}
