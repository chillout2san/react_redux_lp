import React from 'react'
import styled from 'styled-components'
import { Experience } from './parts/Experience'
import { Education } from './parts/Education'
import { Skill } from './parts/Skill'
import { PersonalQualities } from './parts/PersonalQualities'

const Wrapper = styled.div`
  width: 1200px;
  height: 1160px;
  background: #f7f7f7;
  padding: 114px 30px 100px 30px;
`

const UpperWrapper = styled.div`
  height: 560px;
  display: flex;
  justify-content: space-between;
`

const LowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Introduce: React.VFC = () => {
  return (
    <Wrapper>
      <UpperWrapper>
        <Experience />
        <Education />
      </UpperWrapper>
      <LowerWrapper>
        <Skill />
        <PersonalQualities />
      </LowerWrapper>
    </Wrapper>
  )
}
