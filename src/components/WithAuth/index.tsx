import { Context } from '@/main'
import axios, { AxiosResponse } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Result } from 'antd'
import { ResultStatusType } from 'antd/es/result'

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<{ data: T[]; isLoading: boolean }>,
  pageName: string,
): React.FC => {
  const Component = () => {
    const [response, setResponse] = useState<AxiosResponse | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<{ message: string; status: ResultStatusType } | null>(null)
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(window.location.search)
    const pageParams = searchParams.toString()
    const { auth } = useContext(Context)

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await axios.get(getEndpoints(pageName, pageParams), {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          setResponse(response)
        } catch (err) {
          if (axios.isAxiosError(err)) {
            const errResp = err.response
            if (errResp?.status === 401) {
              auth.setAuth(false)
              navigate('/sign-in')
            } else {
              setError(errResp?.data || { message: 'Сталася помилка', status: 500 })
            }
          } else {
            setError({ message: 'Сталася невідома помилка', status: 500 })
          }
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }, [pageParams, navigate, auth])

    if (error)
      return (
        <Result
          status={error.status}
          title={error.status}
          subTitle={error.message}
          style={{ margin: 'auto' }}
        />
      )

    return (
      <WrappedComponent
        data={getPageProps(pageName, response || ({} as AxiosResponse))}
        isLoading={isLoading}
      />
    )
  }

  return Component
}

const getEndpoints = (pageName: string, pageParams = ''): string => {
  const baseUrl = import.meta.env.VITE_API_URL
  switch (pageName) {
    case 'users':
      return `${baseUrl}/company/users?${pageParams}`
    case 'departments':
      return `${baseUrl}/company/departments`
    default:
      return ''
  }
}

const getPageProps = <T,>(pageName: string, response: AxiosResponse): T | [] => {
  if (response?.data) {
    switch (pageName) {
      case 'users':
        return response.data['hydra:member'] || []
      case 'departments':
        return response.data['hydra:member'] || []
      default:
        return []
    }
  }
  return []
}

export default withAuth
