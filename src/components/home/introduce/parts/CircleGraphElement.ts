import styled from 'styled-components'

export const CircleGraphElement = styled.div`
  //文字をセンターにするためにflexboxを使用
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 145px;
  height: 145px;
  font-size: 26px;
  font-weight: 700;
  background-image: radial-gradient(#f7f7f7 60%, transparent 61%),
    conic-gradient(#61cfc8 0%, #00a1ab 35%, #61cfc8 75%, #515151 75% 100%);
  border-radius: 50%;
`

interface ToolTipProps {
  isHover: boolean
}

export const ToolTipElement = styled.div`
  width: 97px;
  height: 43px;
  background: #515151;
  border-radius: 4px;
  display: ${(props: ToolTipProps) => (props.isHover ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 145px;
  left: 60px;
`

export const ToolTipArrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-right: 9px solid transparent;
  border-left: 9px solid transparent;
  border-bottom: 16px solid #515151;
  display: ${(props: ToolTipProps) => (props.isHover ? 'block' : 'none')};
  position: absolute;
  top: 135px;
  left: 75px;
`
