import type User from './user'

type Department = {
  id: number
  title: string
  chief: User
  isMain: boolean
  parent:
    | {
        id: number
        isMain: boolean
      }
    | string
}

export default Department
