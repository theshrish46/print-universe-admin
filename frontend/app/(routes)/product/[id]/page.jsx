import React from 'react';

const page = () => {
  return (
    <>
      <div className='h-screen w-auto bg-gray-100 flex-grow ml-1 rounded-lg px-3 mt-3'>
        <h1 className='text-xl text-gray-500 font-medium my-3'>New Product</h1>
        <form className='flex flex-col gap-3 justify-start items-stretch'>
          <label htmlFor="name">Name</label>
          <input id='name' type="text" placeholder='Name' />

          <label htmlFor="desc">Description</label>
          <textarea id='desc' placeholder='description' cols={30} rows={3}></textarea>

          <label htmlFor="price">Price</label>
          <input id='price' type="text" placeholder='Price' />
        </form>
      </div>
    </>
  );
};

export default page;
