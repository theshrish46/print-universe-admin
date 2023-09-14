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

const productSchema = z.object({
  productname: z
    .string()
    .max(25, { message: "Product Name cannot be more than 25 chars" }),
  price: z.string(),
  productDesc: z.string(),
  productCat: z.string(),
  productSlug: z.string(),
  images: z.record(z.string()),
});

type ProductType = z.infer<typeof productSchema>;

const page = () => {
  const form = useForm<ProductType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productname: "",
      price: "",
      productDesc: "",
      productCat: "",
      productSlug: "",
    },
  });
  const onSubmit = (values: ProductType) => {
    console.log(values);
  };

  return (
    <div className="w-2/3 mx-auto my-10 rounded-lg px-6 py-4 shadow-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-stretch gap-5"
        >
          <FormField
            control={form.control}
            name="productname"
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
              <FormItem>
                <FormLabel>Add Images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    placeholder="images"
                    className="border-2 border-black w-32 h-28 flex justify-center items-center"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default page;
