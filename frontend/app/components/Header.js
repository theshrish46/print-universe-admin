'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const active = 'bg-white px-2 py-1 rounded-md text-gray-600 font-bold';
  const inactive = 'px-2 py-1';
  const user = localStorage.getItem('user');
  return (
    <>
      <aside
        className='
                        h-screen
                        flex flex-col justify-start items-start gap-3 mt-2 px-1 py-1
                    '
      >
        <Link href={'/'} className='text-xl px-2 py-2 font-mono font-semibold'>
          Print Admin
        </Link>
        <nav
          className='
                px-3 py-2 gap-3
                flex flex-col justify-center items-start
                '
        >
          <Link
            href={'/dashboard'}
            target='_blank'
            className={pathname.includes('/') ? active : inactive}
          >
            Dashboard
          </Link>
          <Link
            href={'/product'}
            target='_blank'
            className={pathname.includes('/product') ? active : inactive}
          >
            Products
          </Link>
          <Link
            href={'/order'}
            target='_blank'
            className={pathname.includes('/order') ? active : inactive}
          >
            Orders
          </Link>
          <Link
            href={'/setting'}
            target='_blank'
            className={pathname.includes('setting') ? active : inactive}
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Header;
