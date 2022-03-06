import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../common/Text'

const Wrapper = styled.div`
  width: 885px;
  height: 143px;
`

export const WorksHeader: React.VFC = () => {
  return (
    <Wrapper>
      <Text color="#515151" size="40px" weight="700" mb="14px" align="center">
        WORKS
      </Text>
      <Text color="#515151" size="16px" weight="500" align="center" >
        制作実績など
      </Text>
    </Wrapper>
  )
}
