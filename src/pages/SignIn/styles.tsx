import styled from 'styled-components'
import { Form as AntdForm, FormProps } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: #1677ff;
`

export const Form = styled(AntdForm)<FormProps>`
  width: 100%;
  max-width: 350px;
  margin: auto;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
`
export const LoadingIcon = styled(LoadingOutlined)`
  color: #fff;
`
