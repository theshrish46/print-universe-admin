'use client';
import Image from 'next/image';
import Header from './components/Header';
import Layout from './layout';
export default function Home() {
  const user = localStorage.getItem('user');
  return <Layout>
    <div className='text-xl bg-white flex-grow ml-3 mt-3 rounded-lg px-3'>
      {user.toUpperCase()}
    </div>
  </Layout>;
}
