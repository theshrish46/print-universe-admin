'use client';
import Image from 'next/image';
import Header from './components/Header';
import Layout from './layout';
export default function Home() {
  const user = localStorage.getItem('user');
  return (
    <>
      <div className='text-xl bg-white flex-grow ml-1 mt-3 rounded-lg px-3'>
        <h2 className='mt-3'>
          Hello,<b>{user?.toUpperCase()}</b>
        </h2>
      </div>
    </>
  );
}
