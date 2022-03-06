import React from 'react'
import styled from 'styled-components'
import { ActivityHeader } from './parts/ActivityHeader'
import { Blog } from './parts/Blog'
import { Interest } from './parts/Interest'

const Wrapper = styled.div`
  width: 1200px;
  height: 672px;
  padding: 122px 28px 86px 27px;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Activity: React.VFC = () => {
  return (
    <Wrapper>
      <ActivityHeader />
      <FlexWrapper>
        <Blog />
        <Interest />
      </FlexWrapper>
    </Wrapper>
  )
}

export default Activity
