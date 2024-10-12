import User from '@/types/entities/user'
import type { TableColumnsType } from 'antd'

export const columns: TableColumnsType<User> = [
  {
    title: "Ім'я",
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Прізвище',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Посада',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'E-Mail',
    dataIndex: 'email',
    key: 'email',
  },
]
