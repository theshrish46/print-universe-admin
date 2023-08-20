'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useLocalStorageState from 'use-local-storage-state';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [response, setResponse] = useState([]);
  const [userInfo, setUserInfo] = useLocalStorageState('user', {
    defaultValue: [],
  });

  const router = useRouter();
  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const res = await response.json();
    console.log(res);
    setResponse(res);
    const { user, resEmail, token } = res;
    setUserInfo(user);
  }
  return (
    <>
      <div className='w-1/2 h-96 mx-auto my-10 flex justify-center items-center'>
        <form
          onSubmit={handleLogin}
          className='flex justify-start items-center flex-col 
                    shadow-xl shadow-gray-300 px-6 py-10 rounded-2xl
                '
        >
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-100 px-4 py-2 rounded-lg mt-4 mb-6'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='bg-gray-100 px-4 py-2 rounded-lg mt-4 mb-6'
          />
          <input
            type='submit'
            placeholder='Login'
            className='bg-gray-500 text-white rounded-lg px-4 py-2 my-4 font-medium
                        hover:bg-gray-600
                        '
            onClick={() => router.push('/')}
          />
        </form>
      </div>
    </>
  );
};

export default page;
