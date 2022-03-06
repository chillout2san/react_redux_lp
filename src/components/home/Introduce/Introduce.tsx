import React from 'react'
import styled from 'styled-components'
import { Experience } from './parts/Experience'
import { Education } from './parts/Education'
import { Skill } from './parts/Skill'

const Wrapper = styled.div`
  width: 1200px;
  height: 1160px;
  background: #f7f7f7;
  padding: 114px 30px 100px 30px;
  display: flex;
  justify-content: space-between;
`

export const Introduce: React.VFC = () => {
  return (
    <Wrapper>
      <Experience />
      <Education />
      <Skill />
    </Wrapper>
  )
}
