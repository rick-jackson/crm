import type User from '@/types/entities/user'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'

export default class Users {
  data: User[] = []
  isLoading = true

  constructor() {
    makeAutoObservable(this)
  }

  setData(data: User[]) {
    this.data = data
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  async getData(params = '') {
    this.setLoading(true)
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/company/users?${params}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      this.setData(data['hydra:member'])
    } catch (e) {
      console.log(e)
    } finally {
      this.setLoading(false)
    }
  }
}
