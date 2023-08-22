"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');


  async function handleSubmit(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/products/add-new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title, desc, price })
    })
  }

  return (
    <>
      <div className='h-screen w-auto bg-gray-100 flex-grow ml-1 rounded-lg px-3 mt-3'>
        <h1 className='text-xl text-gray-500 font-medium my-3'>New Product</h1>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-3 justify-start items-stretch'>
          <label htmlFor="name">Name</label>
          <input
            id='name'
            type="text"
            placeholder='Name'
            value={title}
            onChange={e => setTitle(e.target.value)} />

          <label htmlFor="desc">Description</label>
          <textarea
            id='desc'
            placeholder='description'
            cols={30}
            rows={3}
            value={desc}
            onChange={e => setDesc(e.target.value)}
          >
          </textarea>

          <label htmlFor="price">Price</label>
          <input
            id='price'
            type="text"
            placeholder='Price'
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <input
            type="submit"
            className='bg-gray-400'
          />
        </form>
      </div>
    </>
  );
};

export default page;
