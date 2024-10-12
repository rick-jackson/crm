import styled from 'styled-components'
import { Content as AntdContent } from 'antd/es/layout/layout'
import { Table as AntdTable, TableProps } from 'antd'
import User from '@/types/entities/user'

export const Content = styled(AntdContent)`
  display: flex;
  width: 100%;
  background: #fff;
  border-radius: 8px;
`

export const Table = styled(AntdTable)<TableProps<User>>`
  width: 100%;
  padding: 18px;
`
