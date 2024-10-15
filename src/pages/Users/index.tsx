import { columns } from '@/common/configs/usersTableColumns'
import UsersFilter from '@/components/UsersFilter'
import Layout from '@/components/Layout'
import * as Styled from './styles'
import User from '@/types/entities/user'
import withAuth from '@/components/WithAuth'

type UsersPageProps = {
  data: User[]
  isLoading: boolean
}

const UsersPage: React.FC<UsersPageProps> = ({ data, isLoading }) => {
  return (
    <Layout title="Співробітники">
      <Styled.Content>
        <UsersFilter />
        <Styled.Table
          loading={isLoading}
          columns={columns}
          dataSource={data.map(user => ({ ...user, key: user.id }))}
        />
      </Styled.Content>
    </Layout>
  )
}

export default withAuth<User>(UsersPage, 'users')
