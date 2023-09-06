'use client'
import React, { useState } from 'react'

// import Modal from './Modal'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { Button } from '../ui/button'



const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }


    return (
        <div className='flex justify-between items-center'>
            <div>
                <button onClick={openModal} className='bg-black text-white px-3 py-2'>
                    Create Store
                </button>

            </div>

            <ul className='flex justify-around items-center gap-5'>
                <li>
                    <Link href={'/profile'}>
                        <CgProfile size={25} />
                    </Link>
                </li>
                <li>
                    <Button variant={'destructive'}>Logout</Button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar