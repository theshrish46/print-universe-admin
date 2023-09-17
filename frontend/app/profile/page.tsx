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
import { error } from "console";

const page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm();

  function onSubmit(values) {
    console.log(values);
  }

  function navigateRouter() {
    router.push("/");
  }
  return (
    <div
      className="w-5/6 h-auto mx-auto sm:w-4/6 md:w-3/6 lg:w-2/6
            px-6 py-6 shadow-xl rounded-lg bg-gray-50
        "
    >
      <div>
        <button onClick={navigateRouter} className="ok my-4">
          Back
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-start items-stretch flex-col gap-5"
      >
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
        />
        {errors.username && <p>User name required</p>}

        <label htmlFor="email">User email</label>
        <input
          type="email"
          id="email"
          {...register("useremail", { required: true })}
        />
        {errors.useremail && <p>Email required</p>}

        <label htmlFor="password">User Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password required</p>}

        <input type="submit" className="ok" />
      </form>
    </div>
  );
};

export default page;
