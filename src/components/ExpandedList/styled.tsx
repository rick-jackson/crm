import styled from 'styled-components'
import { Skeleton as AntdSkeleton } from 'antd'

export const List = styled.div`
  svg {
    fill: blue;
  }

  .ant-collapse {
    background: none;
  }

  .ant-collapse-header {
    align-items: center !important;
    background-color: #fff;
    border-radius: 8px !important;
    margin-bottom: 12px;
  }

  .ant-collapse-content-box {
    display: flex;
    flex-direction: column;
    padding: 0 !important;
  }
`

export const Skeleton = styled(AntdSkeleton.Node)`
  .ant-skeleton-image {
    width: 100% !important;
    height: 58px !important;
  }
`
