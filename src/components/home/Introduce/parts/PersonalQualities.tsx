import React, { useState } from 'react'
import styled from 'styled-components'
import { IconHeader } from '../../../common/IconHeader'
import { Text } from '../../../common/Text'
import HumanIcon from './human.svg'
import { Circle } from './SharpElement'
import {
  CircleGraphElement,
  ToolTipElement,
  ToolTipArrow,
} from './GraphElement'

const Wrapper = styled.div`
  width: 554px;
`

const SharpTextWrapper = styled.div`
  height: 47px;
  margin-bottom: 15px;
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

const GraphWrapper = styled.div`
  margin-left: 32px;
  display: flex;
`

const CircleGraphWrapper = styled.div`
  width: 145px;
  height: 145px;
  margin-right: 77px;
  position: relative;
`

const BarGraphWrapper = styled.div`
  width: 297px;
  height: 149px;
  background: black;
`

export const PersonalQualities: React.VFC = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Wrapper>
      <IconHeader title="PERSONAL QUALITIES" icon={HumanIcon} />

      <SharpTextWrapper>
        <SharpWrapper>
          <Circle />
        </SharpWrapper>
        <TextWrapper>
          <Text color="#515151" size="14px" weight="500" height="28px">
            技術的好奇心が旺盛で「とにかくやってみる」が身上。
          </Text>
        </TextWrapper>
      </SharpTextWrapper>

      <GraphWrapper>
        <CircleGraphWrapper>
          <CircleGraphElement
            onMouseEnter={() => {
              setIsHover(true)
            }}
            onMouseLeave={() => {
              setIsHover(false)
            }}
          >
            75%
          </CircleGraphElement>
          <ToolTipArrow isHover={isHover} />
          <ToolTipElement isHover={isHover}>
            <Text color="#FFFFFF" size="14px" weight="500">
              Green 75%
            </Text>
          </ToolTipElement>
        </CircleGraphWrapper>
        <BarGraphWrapper />
      </GraphWrapper>
    </Wrapper>
  )
}
