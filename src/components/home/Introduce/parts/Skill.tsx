import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IconHeader } from '../../../common/IconHeader'
import { Text } from '../../../common/Text'
import HumanIcon from './human.svg'
import { RankCircle } from './RankCircle'
import { useGetSkillsQuery } from '../../../../store/skillsApi'

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

export const Skill: React.VFC = () => {
  const { data, error, isLoading } = useGetSkillsQuery()
  return (
    <Wrapper>
      <IconHeader title="SKILL" icon={HumanIcon} />
      {!error &&
        !isLoading &&
        data!.skills.map((skill) => {
          return (
            <FlexWrapper key={skill.language}>
              <TextWrapper>
                <Text color="#515151" size="14px" weight="700" height="28px">
                  {skill.language}
                </Text>
              </TextWrapper>
              <RankCircle star={skill.star} />
              <Text color="#515151" size="14px" weight="500" height="28px">
                {skill.comment}
              </Text>
            </FlexWrapper>
          )
        })}
    </Wrapper>
  )
}
