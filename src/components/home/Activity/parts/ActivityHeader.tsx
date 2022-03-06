import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../common/Text'

const Wrapper = styled.div`
  width: 1145px;
  height: 78px;
  margin-bottom: 67px;
`

export const ActivityHeader: React.VFC = () => {
  return (
    <Wrapper>
      <Text color="#515151" size="40px" weight="700" mb="14px" align="center">
        ACTIVITY
      </Text>
      <Text color="#515151" size="16px" weight="500" align="center">
        活動
      </Text>
    </Wrapper>
  )
}
