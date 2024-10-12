import type Department from '@/types/entities/department'
import type TreeDepartment from '@/types/treeDeparment'

export const getDepartmentsTree = (data: Department[]): TreeDepartment[] => {
  const map: Record<number, TreeDepartment> = {}
  const roots: TreeDepartment[] = []

  data.forEach(item => {
    const treeItem: TreeDepartment = { ...item, children: [], key: item.id }
    map[item.id] = treeItem
  })

  data.forEach(item => {
    if (item.parent && typeof item.parent === 'object') {
      map[item.parent.id]?.children.push(map[item.id])
    } else {
      roots.push(map[item.id])
    }
  })

  return roots
}
