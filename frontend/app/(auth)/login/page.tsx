'use client'
import React, { useState } from 'react'
import * as z from 'zod'

// Hook form imports
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Shadcn/ui components
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { types } from 'util'


const formSchema = z.object({
    username: z.string()
        .min(2, { message: 'Username must be atleast 2 characters' })
        .max(50, { message: 'Username cannot be more than 50 characters' }),
    password: z.string()
        .min(5, { message: 'Password must be of atleast 5 characters' })
})

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    type Theme = 'light' | 'dark'
    const [theme, settheme] = useState<Theme>('dark')

    return (
        <div className='w-1/4 h-auto px-4 py-8 mx-auto my-8 rounded-3xl backdrop-blur-3xl
        text-gray-200 bg-gray-900
        flex justify-center items-center'>
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
                    <Button variant={'secondary'} type='submit' className='my-6'>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default page
