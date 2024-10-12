import type Department from './entities/department'

type TreeDepartment = Department & { key: number; children: TreeDepartment[] }

export default TreeDepartment
