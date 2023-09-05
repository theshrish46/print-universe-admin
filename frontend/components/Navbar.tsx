'use client'
import React, { useState } from 'react'

import Modal from './Modal'
import Link from 'next/link'



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
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <React.Fragment>
                        <h4>Create a new Store</h4>
                        <form className='flex flex-col justify-center items-start'>
                            <input type="text" />
                            <input type="text" />
                            <input type="submit" />
                        </form>
                    </React.Fragment>
                </Modal>
            </div>

            <ul className='flex justify-around items-center gap-5'>
                <li>
                    <Link href={'/profile'}>
                        Profile
                    </Link>
                </li>
                <li>logout</li>
            </ul>
        </div>
    )
}

export default Navbar