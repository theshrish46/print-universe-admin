'use client'
import React from 'react'


import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { toast } from 'react-toastify'
import Toast from './../../../components/Toast'



const formSchema = z.object({
    username: z.string().min(2, { message: 'User name must be atleast 2 chars' }).max(25, { message: 'User name cannot be more than 25 chars' }),
    password: z.string().min(5)
})

type FormValues = z.infer<typeof formSchema>

const page = () => {

    const showToast = () => {
        toast.success('success')
    }


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (
        <div className='my-8 px-4 py-6 bg-gray-900 rounded-2xl w-1/4'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='
                px-4 py-4 mx-auto my-4
                flex flex-col justify-start items-start gap-5'>

                <div className='flex flex-col justify-center items-start gap-3'>
                    <label
                        className='text-white'
                        htmlFor="username">Username</label>
                    <input type="text" id='username' {...register('username')}
                        className='px-2 py-1 rounded-md outline-none focus:outline-none w-full'
                    />
                    {errors.username && <p>user name error</p>}
                </div>

                <div className='flex flex-col justify-center items-start gap-3'>
                    <label
                        className='text-white'
                        htmlFor="password">Password</label>
                    <input type="password" id='password' {...register('password')}
                        className='px-2 py-1 rounded-md outline-none focus:outline-none w-full'
                    />
                    {errors.password && <p>Password Error</p>}
                </div>

                <input type="submit"
                    onClick={showToast}
                    className='bg-gray-300 text-gray-900 px-3 py-2 my-2 rounded-md' />
            </form>
        </div>
    )
}

export default page