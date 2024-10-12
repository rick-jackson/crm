import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { columns } from '@/common/configs/usersTableColumns'
import UsersFilter from '@/components/UsersFilter'
import Layout from '@/components/Layout'
import { Context } from '@/main'
import * as Styled from './styles'

const UsersPage: React.FC = () => {
  const { users } = useContext(Context)

  useEffect(() => {
    users.getData()
  }, [])

  return (
    <Layout title="Співробітники">
      <Styled.Content>
        <UsersFilter />
        <Styled.Table
          loading={users.isLoading}
          columns={columns}
          dataSource={toJS(users.data).map(user => ({ ...user, key: user.id }))}
        />
      </Styled.Content>
    </Layout>
  )
}

export default observer(UsersPage)
