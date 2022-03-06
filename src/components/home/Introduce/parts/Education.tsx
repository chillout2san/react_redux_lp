import React from 'react'
import styled from 'styled-components'
import { IconHeader } from '../../../common/IconHeader'
import { Text } from '../../../common/Text'
import HumanIcon from './human.svg'
import { Circle, Line } from './Element'

const Wrapper = styled.div`
  width: 554px;
`

const FlexWrapper = styled.div`
  display: flex;
`

const TextWrapper = styled.div`
  width: 522px;
`

const SharpWrapper = styled.div`
  width: 14px;
  margin-top: 9px;
  margin-right: 18px;
`

export const Education: React.VFC = () => {
  return (
    <Wrapper>
      <IconHeader title="EDUCATION" icon={HumanIcon} />
      <FlexWrapper>
        <SharpWrapper>
          <Circle />
          <Line height="74px" />
          <Circle />
        </SharpWrapper>
        <TextWrapper>
          <Text color="#515151" size="16px" weight="700" height="28px">
            環境デザイン | 2008.08 - 2018.12
          </Text>
          <Text
            color="#515151"
            size="16px"
            weight="700"
            height="28px"
            mb="28px"
          >
            宝塚造形芸術大学・大学院
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            インテリアデザイン | 2008.08 - 2018.12
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            宝塚造形芸術大学・デザインコース
          </Text>
        </TextWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}
