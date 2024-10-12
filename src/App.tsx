import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '@/common/configs/routes'
import { Context } from '@/main'
import './styles.css'

function App() {
  const { auth } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      auth.checkAuth()
    }
  }, [])

  if (localStorage.getItem('token') && auth.isCheckAuthLoading)
    return <Spin indicator={<LoadingOutlined spin />} size="large" fullscreen />

  return (
    <BrowserRouter>
      {auth.isAuth && !auth.isCheckAuthLoading ? (
        <Routes>
          {privateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default observer(App)
