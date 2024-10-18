import { Button, Typography, Collapse, Flex } from 'antd'
import { EditOutlined, DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import type TreeDepartment from '@/types/treeDeparment'
import * as Styled from './styled'

type ExpandedListProps = {
  data: TreeDepartment[]
}

type ExpandedListItemProps = {
  department: TreeDepartment
  margin?: number
}

const ExpandedListItem: React.FC<ExpandedListItemProps> = ({ department, margin = 12 }) => {
  const { id, title, chief, children } = department

  return (
    <Collapse
      style={{ marginLeft: margin }}
      bordered={false}
      expandIcon={({ isActive }) =>
        !!children.length && (isActive ? <MinusOutlined /> : <PlusOutlined />)
      }
    >
      <Collapse.Panel
        key={id}
        header={
          <Flex gap={8} align="center" justify="space-between">
            <Typography>{title}</Typography>
            <Flex gap={8} align="center">
              <Typography>
                {chief.position ? `${chief.position}:` : ''} {chief.fullName}
              </Typography>
              <Flex gap={8}>
                <Button onClick={e => e.stopPropagation()}>
                  <EditOutlined />
                </Button>
                <Button onClick={e => e.stopPropagation()}>
                  <DeleteOutlined />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        }
      >
        {!!children.length &&
          children.map(child => (
            <ExpandedListItem key={child.id} department={child} margin={margin * 2} />
          ))}
      </Collapse.Panel>
    </Collapse>
  )
}

const ExpandedList: React.FC<ExpandedListProps> = ({ data }) => (
  <Styled.List>
    {data.map(department => (
      <ExpandedListItem key={department.id} department={department} />
    ))}
  </Styled.List>
)

export default ExpandedList
