"use client"
import React, { useEffect } from "react"


import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from 'axios'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// State Management
import { login } from "@/redux/features/auth/authSlice"
import { useDispatch } from 'react-redux'
import { useRouter } from "next/navigation"

const loginformSchema = z.object({
    useremail: z.string()
        .min(2, { message: "Username must be at least 2 characters.", })
        .max(30, { message: 'User name cannot be more than 30 chars' }),
    password: z.string()
        .min(5, { message: 'Password must be 5 chars long' })
})

const page = () => {
    const form = useForm<z.infer<typeof loginformSchema>>({
        resolver: zodResolver(loginformSchema),
        defaultValues: {
            useremail: "",
            password: "",
        },
    })

    const dispatch = useDispatch()
    const router = useRouter()

    const onSubmit = async (data: z.infer<typeof loginformSchema>) => {
        console.log(data)
        try {

            const response = await axios.post('http://localhost:8000/user/login', data)
            const { token, user } = response.data
            localStorage.setItem('user', user)
            localStorage.setItem('token', token)
            dispatch(login({ token: token, user: user }))
            router.push('/')

        } catch (error) {
            console.log('Error sending data', error)
        }
    }
    return (
        <div className="bg-slate-200 rounded-xl px-8 py-8 my-5 shadow-2xl shadow-gray-300">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="useremail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl className="border-none">
                                    <Input placeholder="Username" {...field} className="focus-visible:ring-1 transition-all duration-200 border-none" />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} className="focus-visible:ring-1 transition-all duration-200 border-none" />
                                </FormControl>
                                <FormDescription>
                                    Secure your account with a strong Password
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default page
