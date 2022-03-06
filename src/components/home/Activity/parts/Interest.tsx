import React from 'react'
import styled from 'styled-components'
import { IconHeader } from '../../../common/IconHeader'
import { Text } from '../../../common/Text'
import HeartIcon from './heart.svg'
import Bike from './bike.svg'
import Gas from './gas.svg'
import IoT from './iot.svg'

const Wrapper = styled.div`
  width: 554px;
  height: 600px;
`

const FlexWrapper = styled.div`
  margin-left: 32px;
  width: 522px;
  display: flex;
  align-items: center;
`

interface InterestPictureProps {
  url: string
}

const PictureTextWrapper = styled.div`
  width: 128px;
  height: 276px;
  margin-right: 29px;
`

const InterestPicture = styled.div`
  width: 128px;
  height: 128px;
  background-image: url(${(props: InterestPictureProps) => props.url});
  margin-bottom: 20px;
`

export const Interest: React.VFC = () => {
  const interests = [
    {
      interest: Bike,
      header: '自転車',
      firstText: 'MTB',
    },
    {
      interest: Gas,
      header: '勉強会',
      firstText: 'Gas',
      secondText: 'GDG Kyoto',
    },
    {
      interest: IoT,
      header: 'IoT',
      firstText: 'VUI',
      secondText: 'Google Home',
      thirdText: 'Raspberry Pi',
    },
  ]
  return (
    <Wrapper>
      <IconHeader title="INTEREST" icon={HeartIcon} />

      <FlexWrapper>
        {interests.map((interest) => {
          return (
            <PictureTextWrapper key={interest.interest}>
              <InterestPicture url={interest.interest} />
              <Text
                color="#000000"
                size="16px"
                weight="700"
                height="28px"
                align="center"
              >
                {interest.header}
              </Text>
              <Text
                color="#000000"
                size="14px"
                weight="400"
                height="21px"
                align="center"
              >
                {interest.firstText}
              </Text>
              {interest.secondText && (
                <Text
                  color="#000000"
                  size="14px"
                  weight="400"
                  height="21px"
                  align="center"
                >
                  {interest.secondText}
                </Text>
              )}
              {interest.thirdText && (
                <Text
                  color="#000000"
                  size="14px"
                  weight="400"
                  height="21px"
                  align="center"
                >
                  {interest.thirdText}
                </Text>
              )}
            </PictureTextWrapper>
          )
        })}
      </FlexWrapper>
    </Wrapper>
  )
}
