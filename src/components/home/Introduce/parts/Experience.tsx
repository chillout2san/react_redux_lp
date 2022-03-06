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

export const Experience: React.VFC = () => {
  return (
    <Wrapper>
      <IconHeader title="EXPERIENCE" icon={HumanIcon} />
      <FlexWrapper>
        <SharpWrapper>
          <Circle />
          <Line height="74px" />
          <Circle />
          <Line height="136px" />
          <Circle />
          <Line height="94px" />
          <Circle />
        </SharpWrapper>
        <TextWrapper>
          <Text color="#515151" size="16px" weight="700" height="28px">
            フロントエンジニア | 2019.01 -
          </Text>
          <Text
            color="#515151"
            size="16px"
            weight="700"
            height="28px"
            mb="28px"
          >
            ベースコネクト株式会社
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            ウェブデザイナー | 2008.08 - 2018.12
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            株式会社 クエステトラ
          </Text>
          <Text color="#515151" size="14px" weight="400" height="21px">
            Saasワークフローシステムのサービス開発ベンチャー。
          </Text>
          <Text color="#515151" size="14px" weight="400" height="21px">
            サービス立ち上げに参画。
          </Text>
          <Text
            color="#515151"
            size="14px"
            weight="400"
            height="21px"
            mb="28px"
          >
            UI/UXの改善に取り組んだ。
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            ウェブデザイナー | 2000.04 - 2008.12
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            株式会社 アートスタッフ
          </Text>
          <Text
            color="#515151"
            size="14px"
            weight="400"
            height="21px"
            mb="28px"
          >
            大学などの教育関連向けに、広報サイト、システムを制作、開発。
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            デザイナー | 1994.04 - 1998.10
          </Text>
          <Text color="#515151" size="16px" weight="700" height="28px">
            株式会社 タカオ
          </Text>
          <Text color="#515151" size="14px" weight="400" height="21px">
            公園遊具メーカー。デザイナーとして従事。
          </Text>
        </TextWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}
