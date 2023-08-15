"use client"
import React, { useState } from 'react';

const page = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    async function handleRegister(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ userName, password, email })
        })
    }
    return (
        <>
            <div className='w-1/2 h-96 mx-auto my-10 flex justify-center items-center'>
                <form onSubmit={handleRegister}
                    className='flex justify-start items-center flex-col 
                    shadow-xl shadow-gray-300 px-6 py-10 rounded-2xl
                '>
                    <input type="text" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)}
                        className='bg-gray-100 px-4 py-2 rounded-lg mt-4 mb-6'
                    />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-100 px-4 py-2 rounded-lg mt-4 mb-6'
                    />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}
                        className='bg-gray-100 px-4 py-2 rounded-lg mt-4 mb-6'
                    />
                    <input type="submit" placeholder='Login'
                        className='bg-gray-500 text-white rounded-lg px-4 py-2 my-4 font-medium
                        hover:bg-gray-600
                        '
                    />
                </form>
            </div>
        </>
    )
};

export default page;
