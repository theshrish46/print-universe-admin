"use client"
import React from 'react';
import Layout from './../../layout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const page = () => {
  const id = usePathname()
  console.log(id);
  return (
    <>
      <div className='h-screen w-auto bg-gray-100 flex-grow ml-1 rounded-lg px-3 mt-3'>
        <button className='mt-6'>
          <Link href={`/product/${id}`} className='px-2 py-2 bg-gray-300 rounded-md'>
            Add new product
          </Link>
        </button>
      </div>
    </>
  );
};

export default page;
