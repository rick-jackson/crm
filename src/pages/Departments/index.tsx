import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useMemo } from 'react'
import DepartmentsListSkeleton from '@/components/ExpandedList/Skeleton'
import { getDepartmentsTree } from '@/common/utils/getDepartmentsTree'
import ExpandedList from '@/components/ExpandedList'
import Layout from '@/components/Layout'
import { Context } from '@/main'

const DepartmentsPage: React.FC = () => {
  const { departments } = useContext(Context)

  useEffect(() => {
    departments.getData()
  }, [departments])

  const treeData = useMemo(() => getDepartmentsTree(toJS(departments.data)), [departments.data])

  return (
    <Layout title="Структура компанії">
      {departments.isLoading ? <DepartmentsListSkeleton /> : <ExpandedList data={treeData} />}
    </Layout>
  )
}

export default observer(DepartmentsPage)
