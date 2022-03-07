import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../common/Text'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  width: 275px;
  height: 422px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

interface WorkProps {
  url: string
}

const WorkPicture = styled.div`
  width: 275px;
  height: 275px;
  margin-bottom: 24px;
  background-image: url(${(props: WorkProps) => props.url});
  &:hover {
    box-shadow: 0px 5px 6px #b4b4b4;
    transform: scale(1.01);
    transition: 0.4s;
  }
`

const Arrow = styled.div`
  border-top: solid 5px #ef75be;
  border-right: solid 5px #ef75be;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
`

interface WorksContentProps {
  path: string
  header: string
  paragraph: string
}

export const WorksContent: React.VFC<WorksContentProps> = (props) => {
  const navigate = useNavigate()
  const goToWork = () => {
    navigate('/work')
    window.scroll(0, 0)
  }
  return (
    <Wrapper onClick={goToWork}>
      <WorkPicture url={props.path} />
      <Text color="#000000" size="16px" weight="700" mb="10px">
        {props.header}
      </Text>
      <Text color="#000000" size="14px" weight="400" mb="45px">
        {props.paragraph}
      </Text>
      <Arrow />
    </Wrapper>
  )
}
