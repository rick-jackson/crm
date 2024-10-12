import { useContext } from 'react'
import { Button, Form, Input } from 'antd'
import { Context } from '@/main'
import * as Styled from './styles'

const UsersFilter: React.FC = () => {
  const [form] = Form.useForm()
  const { users } = useContext(Context)

  const handleFilter = () => {
    form
      .validateFields()
      .then(values => {
        const filteredParams = Object.fromEntries(
          Object.entries(values).filter(([_, value]) => value !== undefined),
        )
        users.getData(new URLSearchParams(filteredParams as Record<string, string>).toString())
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo)
      })
  }

  const handleResetFilter = () => {
    users.getData()
    form.resetFields()
  }

  const actions: React.ReactNode[] = [
    <Button key="filter" type="primary" onClick={handleFilter}>
      Фільтрувати
    </Button>,
    <Button key="clear" onClick={handleResetFilter}>
      Очистити
    </Button>,
  ]

  return (
    <Styled.Filter title="Фільтри" actions={actions}>
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
