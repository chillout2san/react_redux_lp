import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-right: 18px;
`

interface CicleProps {
  hasStar: boolean
}

const Circle = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props: CicleProps) => (props.hasStar ? '#00A1AB' : '#C4C4C4')};
  margin-right: 6px;
`

interface RankCircleProps {
  star: string
}

export const RankCircle: React.VFC<RankCircleProps> = (props) => {
  const hasStar = (index: number) => {
    return parseInt(props.star) >= index
  }
  return (
    <Wrapper>
      <Circle hasStar={hasStar(1)} />
      <Circle hasStar={hasStar(2)} />
      <Circle hasStar={hasStar(3)} />
      <Circle hasStar={hasStar(4)} />
      <Circle hasStar={hasStar(5)} />
    </Wrapper>
  )
}
