import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../common/Text'

const Wrapper = styled.div`
  width: 410px;
  height: 208px;
  margin-bottom: 103px;
`

const Header = styled.div`
  width: 410px;
  height: 30px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 26px;
`

interface ContentTextProps {
  title: string
  content: string
}

export const ContentText: React.VFC<ContentTextProps> = (props) => {
  return (
    <Wrapper>
      <Header>
        <Text color="#00A1AB" size="16px" weight="700">
          {props.title}
        </Text>
      </Header>
      <Text color="#515151" size="14px" weight="500" height="21px">
        {props.content}
      </Text>
    </Wrapper>
  )
}
