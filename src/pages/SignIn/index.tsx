import type { FormProps } from 'antd'
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Form, Input, notification, Spin } from 'antd'
import { Context } from '@/main'
import * as Styled from './styles'

type FieldType = {
  login: string
  password: string
}

const SignIn: React.FC = () => {
  const [api, contextHolder] = notification.useNotification()
  const { auth } = useContext(Context)

  const openNotificationWithIcon = (message: string) => {
    api.error({
      message: 'Помилка входу',
      description: message,
    })
  }

  const onFinish: FormProps<FieldType>['onFinish'] = async values => {
    await auth.login(values)
    if (auth.error) {
      openNotificationWithIcon(auth.error)
    }
  }

  return (
    <Styled.Wrapper>
      {contextHolder}
      <Styled.Form layout="vertical" onFinish={onFinish}>
        <Form.Item<FieldType>
          label="Логін"
          name="login"
          rules={[{ required: true, message: 'Введіть логін!' }]}
        >
          <Input size="large" disabled={auth.isLoading} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введіть пароль!' }]}
        >
          <Input.Password size="large" disabled={auth.isLoading} />
        </Form.Item>
        <Form.Item style={{ margin: 0 }}>
          <Button type="primary" htmlType="submit" size="large">
            {auth.isLoading ? <Spin indicator={<Styled.LoadingIcon />} /> : 'Увійти'}
          </Button>
        </Form.Item>
      </Styled.Form>
    </Styled.Wrapper>
  )
}

export default observer(SignIn)
