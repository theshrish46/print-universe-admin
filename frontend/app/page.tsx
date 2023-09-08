'use client'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import Navbar from '@/components/site-components/Navbar'
import { useRouter } from 'next/navigation'
import { resourceUsage } from 'process'

export default function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state) => state.auth.user)
  console.log(user)
  const router = useRouter()
  return (
    <>
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