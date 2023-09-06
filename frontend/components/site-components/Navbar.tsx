'use client'
import React, { useState } from 'react'

// import Modal from './Modal'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { Button } from '../ui/button'
import ModalProvider from '../component-providers/ModalProvider'



const Navbar = () => {
    const [open, setOpen] = useState<Boolean>(false)

    return (
        <div className='flex justify-between items-center'>
            <div>
                <ModalProvider />
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