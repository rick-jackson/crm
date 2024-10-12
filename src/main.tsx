import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Auth from './store/auth.ts'
import Users from './store/users.ts'
import Departments from './store/departments.ts'

interface State {
  auth: Auth
  users: Users
  departments: Departments
}

const auth = new Auth()
const users = new Users()
const departments = new Departments()

export const Context = createContext<State>({
  auth,
  users,
  departments,
})

createRoot(document.getElementById('root')!).render(
  <Context.Provider
    value={{
      auth,
      users,
      departments,
    }}
  >
    <App />
  </Context.Provider>,
)
