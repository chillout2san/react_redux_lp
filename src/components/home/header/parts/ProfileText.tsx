import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../common/Text'

const Wrapper = styled.div`
  width: 612px;
  height: 86px;
`

const SummaryTextWrapper = styled.div`
  margin-bottom: 28px;
  line-height: 28px;
`

const NameTextWrapper = styled.div`
  margin-bottom: 18px;
`

const TableWrapper = styled.div`
  display: flex;
  line-height: 28px;
`

const Column = styled.div`
  width: 147px;
  height: 126px;
  margin-right: 20px;
`

export const ProfileText: React.VFC = () => {
  return (
    <Wrapper>
      <SummaryTextWrapper>
        <Text color="#FFFFFF" size="14px" weight="400" height="28px">
          デザイン、コーディング、UI/UXなど、Web周辺の業務に20年。コーディング大好き。
        </Text>
        <Text color="#FFFFFF" size="14px" weight="400" height="28px">
          現在、サービスベンダー・ベンチャーにて、自立分散協調型のデザインチームと、デザイン文化
        </Text>
        <Text color="#FFFFFF" size="14px" weight="400" height="28px">
          醸成にチャレンジ中。
        </Text>
      </SummaryTextWrapper>

      <NameTextWrapper>
        <Text color="#FFFFFF" size="16px" weight="500">
          山本 純：ヤマモト ジュン
        </Text>
      </NameTextWrapper>

      <TableWrapper>
        <Column>
          <Text color="#FFFFFF" size="14px" weight="700" height="28px">
            性別
          </Text>
          <Text color="#FFFFFF" size="14px" weight="700" height="28px">
            青年月日
          </Text>
          <Text color="#FFFFFF" size="14px" weight="700" height="28px">
            現住所
          </Text>
        </Column>
        <div>
          <Text color="#FFFFFF" size="14px" weight="500" height="28px">
            男性
          </Text>
          <Text color="#FFFFFF" size="14px" weight="500" height="28px">
            1971年06月01日(48歳)
          </Text>
          <Text color="#FFFFFF" size="14px" weight="500" height="28px">
            大阪府茨木市
          </Text>
        </div>
      </TableWrapper>
    </Wrapper>
  )
}
