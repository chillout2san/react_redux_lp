import React from 'react'
import styled from 'styled-components'
import { CirclePicture } from '../../../common/CircularPicture'
import img from './person.svg'

const Wrapper = styled.div`
  width: 275px;
  height: 276px;
  border: 1px solid #ffffff;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const TextWrapper = styled.div``

const Name = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 12px;
`

const Job = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`

export const ProfileCard: React.VFC = () => {
  return (
    <Wrapper>
      <CirclePicture url={img} />
      <TextWrapper>
        <Name>June YAMAMOTO</Name>
        <Job>Front Engineer</Job>
      </TextWrapper>
    </Wrapper>
  )
}
