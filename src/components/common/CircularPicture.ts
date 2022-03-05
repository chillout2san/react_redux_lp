import styled from 'styled-components'

interface Props {
  url: string
}

export const CirclePicture = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  background-image: url(${(props: Props) => props.url});
`
