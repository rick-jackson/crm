import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Вибачте, сторінка, яку ви відвідали, не існує."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Назад додому
        </Button>
      }
      style={{ margin: 'auto' }}
    />
  )
}

export default NotFound
