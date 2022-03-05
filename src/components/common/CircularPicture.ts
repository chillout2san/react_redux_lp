import styled from 'styled-components'

interface CirclePictureProps {
  url: string
}

export const CirclePicture = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  background-image: url(${(props: CirclePictureProps) => props.url});
`
