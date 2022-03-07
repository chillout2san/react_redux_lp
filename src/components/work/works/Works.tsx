import React from 'react'
import styled from 'styled-components'
import { Text } from '../../common/Text'
import MobileLP from './parts/mobilelp.svg'
import PcLP from './parts/pclp.svg'
import { ContentText } from './parts/ContentText'

const Wrapper = styled.div`
  width: 1200px;
  height: 1284px;
  padding: 122px 29px 119px 29px;
`

const HeaderWrapper = styled.div`
  margin-bottom: 75px;
`

const ContentWrapper = styled.div`
  width: 1142px;
  display: flex;
  justify-content: space-between;
`

interface ContentPictureProps {
  width: string
  height: string
  url: string
}

const ContentPicture = styled.div`
  width: ${(props: ContentPictureProps) => props.width};
  height: ${(props: ContentPictureProps) => props.height};
  background-image: url(${(props: ContentPictureProps) => props.url});
`

const ContentTextWrapper = styled.div`
  width: 410px;
  height: 147px;
`

export const Works: React.VFC = () => {
  const ContentTexts = [
    {
      title: 'Musubu LP',
      content:
        '説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト。説明ダミーテキスト。',
    },
    {
      title: '担当',
      content:
        '説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト。説明ダミーテキスト。',
    },
  ]
  return (
    <Wrapper>
      <HeaderWrapper>
        <Text color="#515151" size="40px" weight="700" mb="14px" align="center">
          WORKS
        </Text>
        <Text color="#515151" size="16px" weight="500" align="center">
          制作実績など
        </Text>
      </HeaderWrapper>

      <ContentWrapper>
        <ContentPicture width="420px" height="900px" url={PcLP} />
        <ContentPicture width="260px" height="900px" url={MobileLP} />
        <ContentTextWrapper>
          <ContentText
            title={ContentTexts[0].title}
            content={ContentTexts[0].content}
          />
          <ContentText
            title={ContentTexts[1].title}
            content={ContentTexts[1].content}
          />
        </ContentTextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
