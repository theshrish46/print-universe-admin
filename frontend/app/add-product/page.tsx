"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./../../components/ui/input";
import { Button } from "@/components/ui/button";
import { InputFile } from "@/components/ui/fileInput";

import axios from "axios";

const productSchema = z.object({
  productName: z
    .string()
    .max(25, { message: "Product Name cannot be more than 25 chars" }),
  price: z.string(),
  productDesc: z.string(),
  productCat: z.string(),
  productSlug: z.string(),
  images: z.record(z.string(), { description: "desc" }),
});

type ProductType = z.infer<typeof productSchema>;

const page = () => {
  const form = useForm<ProductType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      price: "",
      productDesc: "",
      productCat: "",
      productSlug: "",
      images: {},
    },
  });
  const onSubmit = async (values: ProductType) => {
    console.log(values);
    try {
      const formData = new FormData();
      formData.append("productName", values.productName);
      formData.append("productDesc", values.productDesc);
      formData.append("price", values.price);
      formData.append("productCategory", values.productCat);
      formData.append("productSlug", values.productSlug);

      if (values.images && values.images[0]) {
        formData.append("images", values.images[0]);
      }

      const response = await axios.post(
        "http://localhost:8000/product/create-product",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Response ", response.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div className="w-2/3 mx-auto my-10 rounded-lg px-6 py-4 shadow-xl">
      <Form {...form}>
        <form
          encType="multipart/form-data"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-stretch gap-5"
        >
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="productname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Input placeholder="desc" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productCat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productSlug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="slug" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <InputFile />
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default page;
