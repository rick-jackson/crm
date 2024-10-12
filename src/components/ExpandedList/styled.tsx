import styled from 'styled-components'
import { Skeleton as AntdSkeleton } from 'antd'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;

  svg {
    fill: blue;
  }
`

export const ListItem = styled.li<{ $margin: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${props => props.$margin}px;
  padding: 12px 18px;
  background: #fff;
  border: 1px solid #80808038;
  border-radius: 5px;
  cursor: pointer;
`

export const Skeleton = styled(AntdSkeleton.Node)`
  .ant-skeleton-image {
    width: 100% !important;
    height: 58px !important;
  }
`
