import React from 'react'
import styled from 'styled-components'
import { IconHeader } from '../../../common/IconHeader'
import { Text } from '../../../common/Text'
import HumanIcon from './human.svg'
import { RankCircle } from './RankCircle'

const Wrapper = styled.div`
  width: 554px;
  height: 600px;
`

const TextWrapper = styled.div`
  width: 107px;
  margin-right: 65px;
`

const FlexWrapper = styled.div`
  margin-left: 32px;
  width: 522px;
  display: flex;
  align-items: center;
`

const json = [
  {
    language: 'JavaScript',
    star: '4',
    comment: 'ES6,TypeScript',
  },
  {
    language: 'HTML / CSS',
    star: '4',
    comment: '',
  },
  {
    language: 'Node.js',
    star: '2',
    comment: 'Node.js',
  },
  {
    language: 'PHP',
    star: '3',
    comment: 'かつてよく書いた',
  },
  {
    language: 'Java',
    star: '2',
    comment: '既存システムの保守に2年ほど従事',
  },
  {
    language: 'Ruby',
    star: '1',
    comment: '機会があればちょこっと書く程度',
  },
  {
    language: 'React + Redux',
    star: '3',
    comment: 'Styled-component,Storybook',
  },
  {
    language: 'CakePHP',
    star: '2',
    comment: '',
  },
  {
    language: 'WordPress',
    star: '3',
    comment: 'テーマ・プラグイン開発など',
  },
  {
    language: 'Action Script',
    star: '4',
    comment: '数多くの実績を積みました',
  },
]

export const Skill: React.VFC = () => {
  return (
    <Wrapper>
      <IconHeader title="SKILL" icon={HumanIcon} />
      {json.map((json) => {
        return (
          <FlexWrapper>
            <TextWrapper>
              <Text color="#515151" size="14px" weight="700" height="28px">
                {json.language}
              </Text>
            </TextWrapper>
            <RankCircle star={json.star}/>
            <Text color="#515151" size="14px" weight="500" height="28px">
              {json.comment}
            </Text>
          </FlexWrapper>
        )
      })}
    </Wrapper>
  )
}
