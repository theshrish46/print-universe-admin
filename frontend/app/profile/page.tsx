"use client";
import React, { useEffect } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

const profileSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type ProfileType = z.infer<typeof profileSchema>;

const page = () => {
  
  const router = useRouter();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values);
  }

  function navigateRouter() {
    router.push("/");
  }
  return (
    <div
      className="w-5/6 h-auto mx-auto sm:w-4/6 md:w-3/6 lg:w-2/6
            px-6 py-6 border-2 border-gray-100 shadow-xl rounded-lg
        "
    >
      <div>
        <Button onClick={navigateRouter} className="my-4 self-start">
          Back
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-start items-stretch flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <FormControl>
                  <Input type="text" className="border-2 border-gray-400" />
                </FormControl>
                <FormDescription>Update your name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="border-2 border-gray-400" />
                </FormControl>
                <FormDescription>Update your email</FormDescription>
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
                  <Input className="border-2 border-gray-400" />
                </FormControl>
                <FormDescription>Update your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default page;
