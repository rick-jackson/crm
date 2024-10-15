import { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import * as Styled from './styles'

const UsersFilter: React.FC = () => {
  const [params] = useSearchParams()
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    form.setFieldsValue({
      name: params.get('name') || '',
      lastName: params.get('lastName') || '',
      position: params.get('position') || '',
      email: params.get('email') || '',
    })
  }, [params, form])

  const handleFilter = async () => {
    try {
      const values = await form.validateFields()
      const filteredParams = Object.fromEntries(Object.entries(values).filter(([, value]) => value))
      navigate(
        `${pathname}?${new URLSearchParams(filteredParams as Record<string, string>).toString()}`,
      )
    } catch (errorInfo) {
      console.error('Validation Failed:', errorInfo)
    }
  }

  const handleResetFilter = () => {
    form.resetFields()
    navigate(pathname)
  }

  return (
    <Styled.Filter
      title="Фільтри"
      actions={[
        <Button key="filter" type="primary" onClick={handleFilter}>
          Фільтрувати
        </Button>,
        <Button key="clear" onClick={handleResetFilter}>
          Очистити
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <Styled.FormItem label="Ім'я" name="name">
          <Input />
        </Styled.FormItem>
        <Styled.FormItem label="Прізвище" name="lastName">
          <Input />
        </Styled.FormItem>
        <Styled.FormItem label="Посада" name="position">
          <Input />
        </Styled.FormItem>
        <Styled.FormItem label="E-mail" name="email">
          <Input />
        </Styled.FormItem>
      </Form>
    </Styled.Filter>
  )
}

export default UsersFilter
