'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

import * as z from 'zod'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../ui/form'
import { Input } from './../ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Label } from '../ui/label'


const storeFormSchema = z.object({
    userstore: z.string()
        .min(5, { message: 'Store name must be atleast 5 chars' })
        .max(50, { message: 'Store name cannot be more than 50 chars' }),
})

type TstoreFormSchema = z.infer<typeof storeFormSchema>

type TModalProvider = {
    open?: Boolean,
    setOpen?: () => Dispatch<SetStateAction<Boolean>>
}

// Page
const ModalProvider = ({ open, setOpen }: TModalProvider) => {
    const [email, setEmail] = useState<string>('')

    const form = useForm<z.infer<typeof storeFormSchema>>({
        resolver: zodResolver(storeFormSchema),
        defaultValues: {
            userstore: '',
        }
    })

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(email)
    }

    return (
        <div>
            <Dialog onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Create a Store</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]" onSubmit={(data) => console.log(data)}>
                    <DialogHeader>
                        <DialogTitle>Create a store</DialogTitle>
                        <DialogDescription>
                            Add new store to your account
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Store Name
                            </Label>
                            <Input id="name" className="col-span-3" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ModalProvider




{/* <Dialog>
    <DialogTrigger className='bg-black'>
        Create a store
    </DialogTrigger>
    <DialogContent className='w-11/12 mx-auto sm:w-9/12 md:w-7/12 lg:w-5/12'>
        <DialogHeader>
            <DialogTitle>Create a New Store</DialogTitle>
            <DialogDescription>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-auto mx-auto flex flex-col justify-start items-stretch gap-5'>
                                    <FormField
                                        control={form.control}
                                        name='userstore'
                                        render={({ field }) => (
                                            <FormItem className='my-4'>
                                                <FormLabel>Enter your store name</FormLabel>
                                                <FormControl>
                                                    <Input type='string' />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type='submit' className='self-end'>Submit</Button>
                                </form>
                            </Form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog> */}