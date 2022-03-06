import styled from 'styled-components'

interface BarGraphElementProps {
  percent: string
}

export const BarGraphElement = styled.div`
  padding-right: 5px;
  width: 250px;
  height: 16px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: right;
  background-image: linear-gradient(
    to right,
    #00a1ab 0%,
    #61cfc8 ${(props: BarGraphElementProps) => props.percent},
    #515151 ${(props: BarGraphElementProps) => props.percent}
  );
`
