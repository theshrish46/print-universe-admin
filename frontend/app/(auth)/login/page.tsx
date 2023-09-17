"use client";
import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

// State Management
import { login } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        data
      );
      const { token, user } = response.data;
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      dispatch(login({ token: token }));
      router.push("/");
    } catch (error) {
      console.log("Error sending data", error);
    }
  };
  return (
    <div className="bg-slate-200 rounded-xl px-8 py-8 my-5 shadow-2xl shadow-gray-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register("useremail")} type="email" id="email" />
        {errors.email && <p>Email required</p>}

        <label htmlFor="password">Password</label>
        <input
          {...register("password", { required: true })}
          id="password"
          type="password"
        />
        {errors.password && <p>Last name is required.</p>}

        <input type="submit" className="bg-gray-500 my-4" />
      </form>
    </div>
  );
};

export default page;
