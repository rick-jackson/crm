import axios from 'axios'
import { makeAutoObservable } from 'mobx'

export default class Auth {
  isAuth = false
  isLoading = false
  isCheckAuthLoading = true
  error = ''

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  setCheckAuthLoading(bool: boolean) {
    this.isCheckAuthLoading = bool
  }

  setError(message: string) {
    this.error = message
  }

  async login(formValues: { login: string; password: string }) {
    this.setLoading(true)
    this.setError('')
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formValues)
      localStorage.setItem('token', data.token)
      localStorage.setItem('refresh_token', data.refresh_token)
      this.setAuth(true)
      this.setCheckAuthLoading(false)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const errResp = e.response
        this.setError(errResp?.data.message)
      } else {
        this.setError('Невідома помилка')
      }
    } finally {
      this.setLoading(false)
    }
  }

  async checkAuth() {
    this.setCheckAuthLoading(true)
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh_token`, {
        refresh_token: localStorage.getItem('refresh_token'),
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('refresh_token', data.refresh_token)
      this.setAuth(true)
    } catch (e) {
      console.log(e)
    } finally {
      this.setCheckAuthLoading(false)
    }
  }
}
