import { useMemo } from 'react'
import DepartmentsListSkeleton from '@/components/ExpandedList/Skeleton'
import { getDepartmentsTree } from '@/common/utils/getDepartmentsTree'
import ExpandedList from '@/components/ExpandedList'
import Layout from '@/components/Layout'
import type Department from '@/types/entities/department'
import withAuth from '@/components/WithAuth'

type DepartmentsPageProps = {
  data: Department[]
  isLoading: boolean
}

const DepartmentsPage: React.FC<DepartmentsPageProps> = ({ data, isLoading }) => {
  const treeData = useMemo(() => getDepartmentsTree(data), [data])

  return (
    <Layout title="Структура компанії">
      {isLoading ? <DepartmentsListSkeleton /> : <ExpandedList data={treeData} />}
    </Layout>
  )
}

export default withAuth<Department>(DepartmentsPage, 'departments')
