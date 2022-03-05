import styled from 'styled-components'

interface TextProps {
  color: string
  size: string
  weight: string
  mb?: string
}

const bottom = (props: TextProps) => {
  return props.mb ? props.mb : '0px'
}

export const Text = styled.p`
  color: ${(props: TextProps) => props.color};
  font-size: ${(props: TextProps) => props.size};
  font-weight: ${(props: TextProps) => props.weight};
  margin-bottom: ${bottom};
`
