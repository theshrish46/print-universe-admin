'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from '@/components/site-components/Navbar'
import { useRouter } from 'next/navigation'
import { resourceUsage } from 'process'
import { login } from '@/redux/features/auth/authSlice'

export default function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  // const user = useSelector((state) => state.auth.user)
  // console.log(user)
  const router = useRouter()
  const setToken = localStorage.getItem('token')
  const dispatch = useDispatch()
  dispatch(login(setToken))
  return (
    <>
      {console.log(isAuthenticated)}
      {
        isAuthenticated ? (
          <>
            <header className='w-11/12 mx-auto my-4' >
              <Navbar />
            </header>
          </>
        ) : (
          <>
            {router.push('/login')}
          </>
        )
      }
    </>
  )
}