import { Flex } from 'antd'
import * as Styled from './styled'

const DepartmentsListSkeleton: React.FC = () => {
  return (
    <Flex vertical gap={6}>
      <Styled.Skeleton />
      <Styled.Skeleton style={{ marginLeft: '36px' }} />
      <Styled.Skeleton style={{ marginLeft: '72px' }} />
      <Styled.Skeleton style={{ marginLeft: '72px' }} />
      <Styled.Skeleton />
    </Flex>
  )
}

export default DepartmentsListSkeleton
