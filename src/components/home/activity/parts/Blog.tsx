import React from 'react'
import styled from 'styled-components'
import { IconHeader } from '../../../common/IconHeader'
import { Text } from '../../../common/Text'
import PencilIcon from './pencil.svg'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  width: 554px;
  height: 600px;
`

const TextWrapper = styled.div`
  width: 95px;
  margin-right: 5px;
`

const FlexWrapper = styled.div`
  margin-left: 32px;
  width: 522px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const articles = [
  {
    date: '2019.09.21',
    title: 'Google Developer Group ミートアップ in 京都',
  },
  {
    date: '2019.09.16',
    title: '久しぶりに自転車に乗った',
  },
  {
    date: '2019.02.20',
    title: 'Raspbery Pi でスマートホームハブを構築：Hass.io',
  },
  {
    date: '2019.01.01',
    title: '新年のご挨拶 と 新天地',
  },
]

export const Blog: React.VFC = () => {
  const navigate = useNavigate()
  const goToWork = () => {
    // ブログ記事に遷移してからブラウザバックした際はscrollしない方が見やすい。
    navigate('/work')
  }
  return (
    <Wrapper>
      <IconHeader title="BLOG" icon={PencilIcon} />
      {articles.map((article) => {
        return (
          <FlexWrapper key={article.date} onClick={goToWork}>
            <TextWrapper>
              <Text color="#515151" size="14px" weight="500" height="28px">
                {article.date}
              </Text>
            </TextWrapper>
            <Text color="#EF75BE" size="14px" weight="700" height="28px">
              {article.title}
            </Text>
          </FlexWrapper>
        )
      })}
    </Wrapper>
  )
}
