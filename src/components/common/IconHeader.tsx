import styled from 'styled-components'
import { Text } from './Text'

interface IconHeaderProps {
  title: string
  icon: string
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const IconTextWrapper = styled.div`
  display: flex;
  margin-bottom: 7px;
`

const Icon = styled.img`
  width: 15px;
  height: 16px;
  margin-right: 18px;
`

const UnderLineWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const UnderLine = styled.div`
  width: 520px;
  height: 0px;
  border: 1px solid #c4c4c4;
  text-align: end;
`

export const IconHeader = (props: IconHeaderProps) => {
  return (
    <Wrapper>
      <IconTextWrapper>
        <Icon src={props.icon} alt="人間の形をしたアイコン" />
        <Text color="#00A1AB" size="16px" weight="700">
          {props.title}
        </Text>
      </IconTextWrapper>
      <UnderLineWrapper>
        <UnderLine />
      </UnderLineWrapper>
    </Wrapper>
  )
}
