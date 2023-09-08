'use client'
import React, { useState } from 'react'
import * as z from 'zod'
import axios from 'axios'

// Hook form imports
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Shadcn/ui components
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


const formSchema = z.object({
    username: z.string()
        .min(2, { message: 'Username must be atleast 2 characters' })
        .max(50, { message: 'Username cannot be more than 50 characters' }),
    useremail: z.string()
        .min(7, { message: 'Email must be atleast of 7 characters' })
        .max(30, { message: 'Email cannot be more than 30 characters' })
        .email(),
    password: z.string()
        .min(5, { message: 'Password must be of atleast 5 characters' })
})

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            useremail: '',
            password: ''
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data)
        try {
            const response = await axios.post('http://localhost:8000/user/register', data)
            const { token } = response.data
            console.log(token)
            const ltk = localStorage.setItem('token', token)
            console.log('Response from server', response.data)
        } catch (error) {
            console.log('Error', error)
        }

    }

    type Theme = 'light' | 'dark'
    const [theme, settheme] = useState<Theme>('dark')

    return (
        <div className='bg-slate-200 rounded-xl px-8 py-8 my-5 shadow-2xl shadow-gray-300 w-1/4'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full px-2'>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field}
                                        className='focus:outline-none outline-none border-gray-600 border-2'
                                    />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="useremail"
                        render={({ field }) => (
                            <>
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field}
                                            className='focus:outline-none outline-none border-gray-600 border-2'
                                        />
                                    </FormControl>
                                    <FormDescription>Your email account</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <>
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" {...field}
                                            className='focus:outline-none outline-none border-gray-600 border-2'
                                        />
                                    </FormControl>
                                    <FormDescription>Enter a strong Password</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </>
                        )}
                    />
                    <Button variant={'default'} type='submit' className='my-6'>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default page
