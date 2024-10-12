import { Navigate } from 'react-router-dom'

import DepartmentsPage from '@pages/Departments'
import UsersPage from '@pages/Users'
import SignIn from '@/pages/SignIn'
import NotFound from '@pages/404'

type Route = {
  path: string
  element: React.ReactNode
}

export const privateRoutes: Route[] = [
  { path: '/', element: <UsersPage /> },
  { path: '/departments', element: <DepartmentsPage /> },
  { path: '/sign-in', element: <Navigate to="/" replace /> },
  { path: '/*', element: <NotFound /> },
]

export const publicRoutes: Route[] = [
  { path: '/sign-in', element: <SignIn /> },
  { path: '/*', element: <Navigate to="/sign-in" replace /> },
]
