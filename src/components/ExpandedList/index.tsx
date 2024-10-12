import { useState } from 'react'
import { Button, Flex, Modal, Popconfirm, Typography } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined, MinusOutlined } from '@ant-design/icons'
import type TreeDepartment from '@/types/treeDeparment'
import * as Styled from './styled'

type ExpandedListProps = {
  data: TreeDepartment[]
}

type ExpandedListItemProps = {
  department: TreeDepartment
  margin?: number
}

const ExpandedListItem: React.FC<ExpandedListItemProps> = ({ department, margin = 18 }) => {
  const [isExpand, setExpand] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal title={department.title} open={isModalOpen} onCancel={handleCancel}>
        <p>Some contents...</p>
      </Modal>
      <Styled.ListItem
        onClick={() => setExpand(!isExpand)}
        $margin={!department.isMain ? margin : 0}
      >
        <Flex gap={12}>
          {!!department.children.length && <>{isExpand ? <MinusOutlined /> : <PlusOutlined />}</>}
          <Typography>{department.title}</Typography>
        </Flex>
        <Flex gap={8} align="center">
          <Typography>
            {department.chief.position && department.chief.position + ':'}{' '}
            {department.chief.fullName}
          </Typography>
          <Button
            onClick={e => {
              e.stopPropagation()
              showModal()
            }}
          >
            <EditOutlined />
          </Button>
          <Popconfirm title={`Видатити ${department.title}`} okText="Так" cancelText="Ні">
            <Button onClick={e => e.stopPropagation()}>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Flex>
      </Styled.ListItem>
      {!!department.children.length &&
        isExpand &&
        department.children.map(el => (
          <ExpandedListItem key={el.id} department={el} margin={margin * 2} />
        ))}
    </>
  )
}

const ExpandedList: React.FC<ExpandedListProps> = ({ data }) => {
  return (
    <Styled.List>
      {data.map(department => (
        <ExpandedListItem key={department.id} department={department} />
      ))}
    </Styled.List>
  )
}

export default ExpandedList
