import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'


type TProp = {
    children: React.ReactNode
}


const layout = ({ children }: TProp) => {
    return (
        <div className='bg-gray-100 h-screen w-full
            flex justify-center items-center flex-col
        '>
            {children}
        </div>
    )
}

export default layout