import styled from 'styled-components'

export const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c4c4c4;
  margin: 0px auto 3px auto;
`

interface LineProps {
  height: string
}

export const Line = styled.div`
  width: 1px;
  height: ${(props: LineProps) => props.height};
  background: #c4c4c4;
  margin: 0 auto 3px auto;
`
