import type Department from '@/types/entities/department'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'

export default class Departments {
  data: any[] = []
  isLoading = true

  constructor() {
    makeAutoObservable(this)
  }

  setData(data: Department[]) {
    this.data = data
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  async getData() {
    this.setLoading(true)
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/company/departments`, {
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
