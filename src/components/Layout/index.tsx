import { Button, Dropdown, Flex, Typography } from 'antd'
import * as Styled from './styles'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'

type LayoutProps = {
  title: string
  children: React.ReactNode
}
const items = [
  {
    key: 'users',
    label: <Link to={'/'}>Співробітники</Link>,
  },
  {
    key: 'departments',
    label: <Link to={'/departments'}>Компанія</Link>,
  },
]

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Styled.Layout>
      <Flex justify="space-between" align="center">
        <Typography.Title level={3} style={{ marginLeft: '12px' }}>
          {title}
        </Typography.Title>
        <Dropdown menu={{ items }} placement="top">
          <Button type="primary">
            <MenuOutlined />
          </Button>
        </Dropdown>
      </Flex>
      {children}
    </Styled.Layout>
  )
}

export default Layout
