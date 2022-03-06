import React from 'react'
import styled from 'styled-components'
import { WorksHeader } from './parts/WorksHeader'
import { WorksContent } from './parts/WorksContent'
import FirstWork from './parts/FirstWork.svg'
import SecondWork from './parts/SecondWork.svg'
import ThirdWork from './parts/ThirdWork.svg'

const Wrapper = styled.div`
  width: 1200px;
  height: 805px;
  padding: 120px 157.5px;
`

const ContentWrapper = styled.div`
  width: 885px;
  height: 366px;
  display: flex;
  justify-content: space-between;
`

export const Works: React.VFC = () => {
  return (
    <Wrapper>
      <WorksHeader />
      <ContentWrapper>
        <WorksContent
          path={FirstWork}
          header="MusubuLP"
          paragraph="Coding/Gatsby"
        />
        <WorksContent
          path={SecondWork}
          header="MusubuLP"
          paragraph="Coding/Gatsby"
        />
        <WorksContent
          path={ThirdWork}
          header="MusubuLP"
          paragraph="Coding/Gatsby"
        />
      </ContentWrapper>
    </Wrapper>
  )
}
