import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Auth from './store/auth.ts'

interface State {
  auth: Auth
}

const auth = new Auth()

export const Context = createContext<State>({
  auth,
})

createRoot(document.getElementById('root')!).render(
  <Context.Provider
    value={{
      auth,
    }}
  >
    <App />
  </Context.Provider>,
)
